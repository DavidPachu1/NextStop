#!/usr/bin/env node
/**
 * NextStop MCP Server
 *
 * Expone la herramienta `web_search` via protocolo MCP (stdio).
 * Registro con Claude Code:
 *   claude mcp add nextstop-search -- node /ruta/a/backend/src/mcp/server.js
 *
 * Requiere: TAVILY_API_KEY en el entorno.
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { webSearch } from '../utils/webSearch.js';

const server = new Server(
  { name: 'nextstop-search', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'web_search',
      description:
        'Busca información actualizada en internet sobre destinos de viaje, hoteles, restaurantes, actividades, precios y más. Usa esta herramienta para obtener datos reales y actuales.',
      inputSchema: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description:
              'Consulta de búsqueda específica. Incluye el destino, año y categoría (ej: "mejores hoteles Barcelona 2025 precio medio")',
          },
        },
        required: ['query'],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name !== 'web_search') {
    return { content: [{ type: 'text', text: `Herramienta desconocida: ${name}` }], isError: true };
  }

  const { query } = args;
  if (!query || typeof query !== 'string') {
    return { content: [{ type: 'text', text: 'El parámetro query es obligatorio' }], isError: true };
  }

  const results = await webSearch(query);
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(results, null, 2),
      },
    ],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
