import { runAgent } from './baseAgent.js';

const SYSTEM_PROMPT = `Eres un experto en turismo y experiencias de viaje con conocimiento profundo de destinos internacionales.
Tu misión: crear un itinerario día a día detallado con actividades organizadas en mañana/tarde/noche, adaptado al estilo de viaje.

ESTILOS Y SU ENFOQUE:
- cultural: museos, historia, arte, arquitectura, visitas guiadas
- gastronomia: mercados, tours gastronómicos, cocina local, bodegas, cafés icónicos
- fiesta: zonas de ambiente nocturno, bares, clubs, festivales, rooftops
- relax: spas, playas, parques, cafés tranquilos, paseos sin prisas
- aventura: senderismo, deportes, tours de aventura, kayak, escalada, naturaleza

INSTRUCCIONES:
1. Usa web_search 2-3 veces para obtener actividades reales y actualizadas con precios de entrada
2. Organiza actividades en bloques de mañana (9-14h), tarde (14-20h) y noche (20h+)
3. Incluye 2-3 actividades por bloque, con duración y precio real
4. Varía el ritmo: no pongas visitas intensas todo el día
5. El primer día: actividades de orientación y llegada (más ligero)
6. El último día: actividades compatibles con vuelo/tren de regreso

RESPONDE ÚNICAMENTE con un JSON válido con esta estructura (sin texto adicional):
{
  "imprescindibles": ["string (top 5 cosas que NO hay que perderse)"],
  "itinerario": [
    {
      "dia": 1,
      "titulo": "string (título evocador del día)",
      "manana": {
        "actividades": [
          {
            "nombre": "string",
            "descripcion": "string (qué verás, por qué vale la pena, dato curioso)",
            "duracion": "string",
            "precio": "string",
            "emoji": "string",
            "tipo": "string"
          }
        ],
        "consejo": "string (tip práctico: mejor hora, cómo llegar, qué llevar...)"
      },
      "tarde": {
        "actividades": [...],
        "consejo": "string"
      },
      "noche": {
        "actividades": [...],
        "consejo": "string"
      },
      "coste_estimado": 0
    }
  ]
}`;

export async function runActivitiesAgent({ destination, days, budget, style }) {
  const budgetPerDay = Math.round(budget / days);

  const userMessage = `Crea un itinerario de actividades para:
- Destino: ${destination}
- Duración: ${days} días
- Presupuesto total: ${budget}€ (~${budgetPerDay}€/día)
- Estilo de viaje: ${style}
- Año de referencia: ${new Date().getFullYear()}

Crea UN objeto por cada día del viaje (${days} días en total), con actividades reales y actualizadas.
Adapta completamente el estilo ${style} en cada sugerencia.`;

  return runAgent({ systemPrompt: SYSTEM_PROMPT, userMessage, agentName: 'Actividades' });
}
