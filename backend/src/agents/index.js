import { runAccommodationAgent } from './accommodationAgent.js';
import { runActivitiesAgent } from './activitiesAgent.js';
import { runRestaurantsAgent } from './restaurantsAgent.js';
import { runTipsAgent } from './tipsAgent.js';

/**
 * Ejecuta los 4 agentes en paralelo y combina sus resultados en un plan de viaje unificado.
 * @param {Object} params - { destination, days, budget, style }
 * @param {Function} onEvent - callback(event, data) para streaming SSE
 */
export async function generateTravelPlan(params, onEvent) {
  const { destination, days, budget, style } = params;
  const emit = onEvent || (() => {});

  emit('status', { message: `Lanzando 4 agentes para ${destination}...`, progress: 5 });

  const agentNames = ['alojamiento', 'actividades', 'restaurantes', 'tips'];
  const completed = { alojamiento: false, actividades: false, restaurantes: false, tips: false };

  const withProgress = (name, promise) =>
    promise
      .then((result) => {
        completed[name] = true;
        const done = Object.values(completed).filter(Boolean).length;
        emit('agent_complete', { agent: name, progress: 20 + done * 18 });
        return result;
      })
      .catch((err) => {
        console.error(`[Agente ${name}] Error:`, err.message);
        emit('agent_error', { agent: name, error: err.message });
        return null;
      });

  const [accommodation, activities, restaurants, tips] = await Promise.all([
    withProgress('alojamiento', runAccommodationAgent({ destination, days, budget, style })),
    withProgress('actividades', runActivitiesAgent({ destination, days, budget, style })),
    withProgress('restaurantes', runRestaurantsAgent({ destination, days, budget, style })),
    withProgress('tips', runTipsAgent({ destination, days, budget, style })),
  ]);

  emit('status', { message: 'Combinando resultados...', progress: 92 });

  const plan = buildPlan({ destination, days, budget, style, accommodation, activities, restaurants, tips });

  emit('status', { message: '¡Tu plan está listo!', progress: 100 });
  return plan;
}

function buildPlan({ destination, days, budget, style, accommodation, activities, restaurants, tips }) {
  const itinerary = buildItinerary({ activities, restaurants, days });

  return {
    metadata: {
      destino: destination,
      dias: days,
      presupuesto: budget,
      estilo: style,
      generado: new Date().toISOString(),
    },
    itinerario: itinerary,
    alojamiento: accommodation || defaultAccommodation(destination),
    restaurantes: restaurants || { destacados: [], por_momento: {} },
    tips: tips || { transporte: [], costumbres: [], mejor_epoca: '', presupuesto: {} },
    presupuesto: tips?.presupuesto || buildDefaultBudget(budget, days),
  };
}

function buildItinerary({ activities, restaurants, days }) {
  if (!activities?.itinerario) return buildFallbackItinerary(days);

  const restaurantes = restaurants?.destacados || [];
  const cenarIdx = restaurantes.filter((r) => r.cuando_ir === 'cena' || r.cuando_ir === 'cualquiera');

  return activities.itinerario.slice(0, days).map((day, i) => ({
    ...day,
    noche: {
      ...day.noche,
      restaurante: cenarIdx[i % cenarIdx.length] || restaurantes[i % restaurantes.length] || null,
    },
  }));
}

function buildFallbackItinerary(days) {
  return Array.from({ length: days }, (_, i) => ({
    dia: i + 1,
    titulo: `Día ${i + 1}`,
    manana: { actividades: [], consejo: '' },
    tarde: { actividades: [], consejo: '' },
    noche: { actividades: [], restaurante: null, consejo: '' },
    coste_estimado: 0,
  }));
}

function defaultAccommodation(destination) {
  return {
    zonas: [],
    opciones: [],
    recomendacion: { nombre: '', motivo: `Consulta opciones de alojamiento en ${destination}`, precio_total_estancia: '' },
  };
}

function buildDefaultBudget(budget, days) {
  return {
    total_estimado: budget,
    por_dia: Math.round(budget / days),
    desglose: {
      alojamiento: Math.round(budget * 0.35),
      comida: Math.round(budget * 0.25),
      actividades: Math.round(budget * 0.20),
      transporte_local: Math.round(budget * 0.10),
      extras: Math.round(budget * 0.10),
    },
    consejos_ahorro: ['Reserva con antelación para mejores precios', 'Usa el transporte público'],
  };
}
