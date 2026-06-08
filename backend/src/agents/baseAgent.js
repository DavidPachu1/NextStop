import Anthropic from '@anthropic-ai/sdk';
import { webSearch } from '../utils/webSearch.js';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const WEB_SEARCH_TOOL = {
  name: 'web_search',
  description:
    'Busca información actualizada en internet sobre destinos de viaje, hoteles, restaurantes, actividades, transporte y precios. Usa esta herramienta para obtener datos reales y actualizados del año actual.',
  input_schema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description:
          'Consulta de búsqueda específica. Incluye siempre el destino y el año (ej: "mejores tapas Barcelona 2025", "precio hotel Eixample Barcelona junio 2025")',
      },
    },
    required: ['query'],
  },
};

/**
 * Ejecuta un agente Claude con acceso a web_search.
 * Itera hasta que Claude devuelve end_turn o max 8 rondas.
 */
export async function runAgent({ systemPrompt, userMessage, agentName }) {
  const messages = [{ role: 'user', content: userMessage }];
  let round = 0;
  const MAX_ROUNDS = 8;

  while (round < MAX_ROUNDS) {
    round++;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 8192,
      system: systemPrompt,
      tools: [WEB_SEARCH_TOOL],
      messages,
    });

    if (response.stop_reason === 'end_turn') {
      const textBlock = response.content.find((b) => b.type === 'text');
      if (!textBlock) throw new Error(`[${agentName}] Sin respuesta de texto`);
      return extractJSON(textBlock.text, agentName);
    }

    if (response.stop_reason === 'tool_use') {
      messages.push({ role: 'assistant', content: response.content });

      const toolCalls = response.content.filter((b) => b.type === 'tool_use');
      const toolResults = await Promise.all(
        toolCalls.map(async (call) => {
          if (call.name === 'web_search') {
            const result = await webSearch(call.input.query);
            return {
              type: 'tool_result',
              tool_use_id: call.id,
              content: JSON.stringify(result),
            };
          }
          return { type: 'tool_result', tool_use_id: call.id, content: '{}' };
        })
      );

      messages.push({ role: 'user', content: toolResults });
    } else {
      break;
    }
  }

  throw new Error(`[${agentName}] Superado el límite de rondas`);
}

function extractJSON(text, agentName) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) {
    try { return JSON.parse(fenced[1].trim()); } catch (_) {}
  }
  const braceStart = text.indexOf('{');
  const braceEnd = text.lastIndexOf('}');
  if (braceStart !== -1 && braceEnd !== -1) {
    try { return JSON.parse(text.slice(braceStart, braceEnd + 1)); } catch (_) {}
  }
  throw new Error(`[${agentName}] No se pudo extraer JSON de la respuesta`);
}
