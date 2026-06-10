import { runAgent } from './baseAgent.js';

const SYSTEM_PROMPT = `Eres un experto en viajes con amplia experiencia preparando maletas para todo tipo de destinos y climas.
Tu misión: generar una lista de equipaje personalizada según el destino, duración, estilo de viaje y época del año.

INSTRUCCIONES:
1. Usa web_search 1 vez para verificar el clima esperado del destino en el mes indicado
2. Adapta la ropa al clima real: temperaturas, precipitaciones, variaciones día/noche
3. Personaliza según el estilo de viaje:
   - cultural: zapatos cómodos para caminar, ropa discreta para museos e iglesias
   - gastronomia: un outfit más arreglado para restaurantes de nivel
   - fiesta: ropa de noche, look de discoteca o beach club
   - relax: bañador, ropa de playa o spa, calzado cómodo
   - aventura: calzado de trekking, ropa técnica transpirable
4. Incluye documentos específicos del destino (visado si aplica, reservas obligatorias, tarjetas de transporte)
5. "esenciales" = cosas que la gente olvida para ESE destino en concreto

RESPONDE ÚNICAMENTE con un JSON válido con esta estructura (sin texto adicional):
{
  "documentos": ["string (documento + para qué o dónde lo necesitas)"],
  "ropa": [
    {
      "categoria": "string",
      "items": ["string (prenda concreta con cantidad si aplica)"]
    }
  ],
  "tecnologia": ["string (gadget + para qué sirve específicamente en este viaje)"],
  "salud_higiene": ["string"],
  "esenciales": ["string (item que la gente olvida para este destino específico)"],
  "consejo_maleta": "string (consejo práctico sobre el tamaño y tipo de maleta ideal para este viaje)"
}`;

export async function runPackingAgent({ destination, days, budget, style }) {
  const month = new Date().toLocaleDateString('es-ES', { month: 'long' });
  const year = new Date().getFullYear();

  const userMessage = `Genera la lista de equipaje perfecta para:
- Destino: ${destination}
- Duración: ${days} días
- Presupuesto: ${budget}€
- Estilo de viaje: ${style}
- Viaje en: ${month} de ${year}

Busca el clima esperado en ${destination} en ${month} y adapta la ropa.
Para el estilo "${style}", añade items específicos (ej: para 'aventura' incluye calzado de trekking; para 'fiesta' incluye ropa de noche...).`;

  return runAgent({ systemPrompt: SYSTEM_PROMPT, userMessage, agentName: 'Equipaje' });
}
