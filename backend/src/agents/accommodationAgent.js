import { runAgent } from './baseAgent.js';

const SYSTEM_PROMPT = `Eres un experto en alojamiento y hospedaje con amplio conocimiento de destinos internacionales.
Tu misión: analizar las mejores opciones de alojamiento para el destino indicado, adaptadas al presupuesto y estilo de viaje.

INSTRUCCIONES:
1. Usa web_search para obtener información real y actualizada sobre zonas y precios de alojamiento
2. Busca mínimo 2 veces: una para las zonas/barrios y otra para opciones concretas con precios
3. Adapta las recomendaciones al estilo de viaje (cultural→centro histórico, fiesta→zona de ambiente, relax→zona tranquila, etc.)
4. Calcula el coste total de alojamiento basándote en los días del viaje

RESPONDE ÚNICAMENTE con un JSON válido con esta estructura exacta (sin texto adicional):
{
  "zonas": [
    {
      "nombre": "string",
      "descripcion": "string (por qué es buena zona, qué tiene cerca)",
      "nivel_precio": "económico | medio | alto",
      "precio_rango": "string (ej: '60-100€/noche')",
      "emoji": "string"
    }
  ],
  "opciones": [
    {
      "nombre": "string",
      "tipo": "hotel | hostal | apartamento | boutique | airbnb",
      "zona": "string",
      "precio_noche": "string",
      "descripcion": "string",
      "puntos_fuertes": ["string", "string"]
    }
  ],
  "recomendacion": {
    "nombre": "string",
    "motivo": "string (por qué es la mejor opción para este viajero)",
    "precio_total_estancia": "string (ej: '480€ para 6 noches')"
  }
}`;

export async function runAccommodationAgent({ destination, days, budget, style }) {
  const budgetPerNight = Math.round((budget * 0.35) / days);

  const userMessage = `Encuentra las mejores opciones de alojamiento para:
- Destino: ${destination}
- Duración: ${days} días (${days - 1} noches)
- Presupuesto total del viaje: ${budget}€
- Presupuesto estimado para alojamiento: ~${budgetPerNight}€/noche (35% del total)
- Estilo de viaje: ${style}
- Fecha de referencia: ${new Date().getFullYear()}

Busca información actualizada y recomienda las 3-4 mejores zonas para alojarse y 4-6 opciones concretas de alojamiento.`;

  return runAgent({ systemPrompt: SYSTEM_PROMPT, userMessage, agentName: 'Alojamiento' });
}
