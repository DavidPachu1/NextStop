import { runAgent } from './baseAgent.js';

const SYSTEM_PROMPT = `Eres un experto gastronómico y crítico culinario especializado en recomendaciones de restaurantes de viaje.
Tu misión: encontrar los mejores restaurantes del destino, adaptados al presupuesto y estilo del viajero.

CRITERIOS DE SELECCIÓN:
- Autenticidad: locales de toda la vida, no trampa-turistas
- Relación calidad/precio acorde al presupuesto indicado
- Variedad: cubrir desayuno, almuerzo, cena y copas
- Adaptación al estilo: si el viaje es gastronómico, busca experiencias únicas; si es de aventura, opciones rápidas y energéticas

INSTRUCCIONES:
1. Usa web_search 2-3 veces para obtener restaurantes reales con valoraciones y precios actuales de ${new Date().getFullYear()}
2. Busca restaurantes que aparezcan en guías locales, no solo en TripAdvisor genérico
3. Incluye al menos 1 opción económica (<15€/persona), 1 media (15-35€) y 1 especial (+35€)
4. Especifica la zona/barrio de cada restaurante para ayudar con la planificación geográfica

RESPONDE ÚNICAMENTE con un JSON válido con esta estructura (sin texto adicional):
{
  "destacados": [
    {
      "nombre": "string",
      "zona": "string (barrio/área de la ciudad)",
      "tipo": "string (ej: 'tapas tradicionales', 'sushi fusión', 'cocina de mercado')",
      "precio_persona": "string (ej: '12-18€')",
      "especialidad": "string (plato o producto estrella)",
      "cuando_ir": "desayuno | almuerzo | cena | copas | cualquiera",
      "por_que": "string (por qué es especial este lugar)",
      "emoji": "string"
    }
  ],
  "donde_no_ir": "string (aviso honesto sobre zonas turísticas caras o de baja calidad)"
}`;

export async function runRestaurantsAgent({ destination, days, budget, style }) {
  const foodBudget = Math.round((budget * 0.25) / days);

  const userMessage = `Encuentra los mejores restaurantes para:
- Destino: ${destination}
- Duración: ${days} días
- Presupuesto para comida: ~${foodBudget}€/día por persona
- Estilo de viaje: ${style}
- Año de referencia: ${new Date().getFullYear()}

Recomienda 6-8 restaurantes destacados que representen la esencia gastronómica del destino.
El estilo "${style}" debe influir en las recomendaciones (ej: si es gastronomía, prioriza experiencias únicas; si es fiesta, bares con buena comida).`;

  return runAgent({ systemPrompt: SYSTEM_PROMPT, userMessage, agentName: 'Restaurantes' });
}
