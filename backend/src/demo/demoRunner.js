import { selectDestination } from './destSelector.js';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Simula los 4 agentes con delays realistas para que el loading screen funcione igual.
 * Adapta los metadatos del plan demo al destino/días/presupuesto que introdujo el usuario.
 */
export async function runDemoMode({ destination, days, budget, style }, emit) {
  const { data: base, name: matchedName } = selectDestination(destination);
  console.log(`[DEMO MODE] "${destination}" → datos de ${matchedName}`);

  emit('status', { message: `Lanzando 4 agentes para ${destination}...`, progress: 5 });
  await sleep(800);

  emit('status', { message: 'Agentes iniciados, buscando información...', progress: 15 });
  await sleep(1200);

  // Simula que el agente de actividades termina primero
  await sleep(2000);
  emit('agent_complete', { agent: 'actividades', progress: 38 });

  // Luego restaurantes
  await sleep(1500);
  emit('agent_complete', { agent: 'restaurantes', progress: 56 });

  // Luego alojamiento
  await sleep(1800);
  emit('agent_complete', { agent: 'alojamiento', progress: 74 });

  emit('status', { message: 'Calculando presupuesto y tips...', progress: 80 });

  // Por último tips
  await sleep(1400);
  emit('agent_complete', { agent: 'tips', progress: 92 });

  emit('status', { message: 'Combinando resultados...', progress: 95 });
  await sleep(600);

  // Adapta el plan demo al input del usuario
  const plan = adaptPlan(base, { destination, days, budget, style, matchedName });

  emit('status', { message: '¡Tu plan está listo!', progress: 100 });
  await sleep(300);

  return plan;
}

function adaptPlan(base, { destination, days, budget, style, matchedName }) {
  const itinerario = base.itinerario.slice(0, days);

  // Si hay menos días en el demo que los solicitados, rellena con días genéricos
  while (itinerario.length < days) {
    const n = itinerario.length + 1;
    itinerario.push({
      dia: n,
      titulo: `Día ${n}: Explora ${destination} a tu ritmo`,
      manana: {
        actividades: [
          {
            nombre: `Mañana libre en ${destination}`,
            descripcion: 'Explora los rincones que más te hayan gustado o descubre algo nuevo.',
            duracion: '3 horas',
            precio: 'Variable',
            emoji: '🗺️',
            tipo: 'relax',
          },
        ],
        consejo: 'Un día sin planificar a veces da las mejores sorpresas.',
      },
      tarde: {
        actividades: [
          {
            nombre: 'Tarde de compras o paseo',
            descripcion: 'Aprovecha para los souvenirs o simplemente pasea sin rumbo fijo.',
            duracion: '3 horas',
            precio: 'Variable',
            emoji: '🛍️',
            tipo: 'relax',
          },
        ],
        consejo: 'Los mercadillos locales son mejores que las tiendas turísticas para recordatorios auténticos.',
      },
      noche: {
        actividades: [],
        restaurante: base.restaurantes?.destacados?.[n % base.restaurantes.destacados.length] || null,
        consejo: 'Última noche — celébrala en el restaurante que más te haya gustado del viaje.',
      },
      coste_estimado: Math.round(budget / days),
    });
  }

  const presupuesto = {
    total_estimado: budget,
    por_dia: Math.round(budget / days),
    desglose: {
      alojamiento: Math.round(budget * 0.37),
      comida: Math.round(budget * 0.27),
      actividades: Math.round(budget * 0.19),
      transporte_local: Math.round(budget * 0.07),
      extras: Math.round(budget * 0.10),
    },
    consejos_ahorro: base.presupuesto?.consejos_ahorro ?? [
      'Reserva el alojamiento con antelación para mejores precios',
      'Usa el transporte público en lugar de taxis',
      'Come el menú del día en lugar de la carta',
      'Reserva las entradas de museos online para evitar colas y posibles descuentos',
    ],
  };

  return {
    ...base,
    _demo: true,
    _demoSource: matchedName,
    metadata: {
      destino: destination,
      dias: days,
      presupuesto: budget,
      estilo: style,
      generado: new Date().toISOString(),
    },
    itinerario,
    presupuesto,
  };
}
