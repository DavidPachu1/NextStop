# 🧭 NextStop — Tu viaje a medida en un clic

> Generador de itinerarios de viaje con IA: una arquitectura **multiagente** (Claude) que orquesta búsqueda web en tiempo real para combinar alojamiento, actividades, restaurantes y presupuesto en un plan de viaje personalizado, en cuestión de segundos.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&labelColor=20232a)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![Anthropic](https://img.shields.io/badge/Claude-Sonnet%204.6-D97757?logo=anthropic&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-portfolio--only-lightgrey)

---

## ✨ Qué hace

Rellenas un formulario (destino, número de días, presupuesto y estilo de viaje) y **4 agentes de IA trabajan en paralelo**, cada uno especializado en una parte del plan:

- 🏨 **Alojamiento** — mejores zonas, hoteles y rangos de precio
- 🗓️ **Actividades** — itinerario día a día dividido en mañana / tarde / noche
- 🍽️ **Restaurantes** — sitios destacados por zona, especialidad y precio
- 💶 **Tips & presupuesto** — transporte, costumbres locales, frases útiles y desglose de gastos con consejos de ahorro

Cada agente consulta información actualizada mediante **búsqueda web en tiempo real (Tavily)**, y el resultado se combina y se transmite al frontend en streaming (SSE), mostrando el itinerario a medida que se genera — con mapa interactivo incluido.

---

## Stack

| Capa | Tech |
|---|---|
| Frontend | React 18 + Vite + Tailwind CSS |
| Backend | Node.js + Express (ESM) |
| IA | Anthropic Claude (claude-sonnet-4-6) |
| Búsqueda web | Tavily Search API |
| MCP | @modelcontextprotocol/sdk |
| Mapas | Leaflet / React-Leaflet |

---

## Estructura del proyecto

```
NextStop/
├── skills/
│   └── travel-plan.md        # Formato y tono del itinerario
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── server.js          # Express app
│       ├── routes/plan.js     # POST /generate + GET /stream/:id
│       ├── mcp/server.js      # Servidor MCP (web_search tool)
│       ├── utils/webSearch.js # Wrapper Tavily API
│       └── agents/
│           ├── baseAgent.js          # Loop Anthropic + tool_use
│           ├── accommodationAgent.js # Agente alojamiento
│           ├── activitiesAgent.js    # Agente actividades
│           ├── restaurantsAgent.js   # Agente restaurantes
│           ├── tipsAgent.js          # Agente tips + presupuesto
│           └── index.js              # Orquestador (Promise.all)
└── frontend/
    ├── vite.config.js
    ├── tailwind.config.js
    └── src/
        ├── App.jsx
        ├── index.css
        └── components/
            ├── TravelForm.jsx
            ├── LoadingScreen.jsx
            ├── ItineraryView.jsx
            ├── DayCard.jsx
            ├── AccommodationSection.jsx
            ├── TipsSection.jsx
            └── BudgetSummary.jsx
```

---

## Puesta en marcha

### 1. Variables de entorno (backend)

```bash
cd backend
cp .env.example .env
```

Edita `.env`:
```
ANTHROPIC_API_KEY=sk-ant-...       # https://console.anthropic.com
TAVILY_API_KEY=tvly-...            # https://tavily.com (gratis hasta 1000/mes)
PORT=3001
FRONTEND_URL=http://localhost:5173
```

> **Mínimo requerido:** `ANTHROPIC_API_KEY`. Sin `TAVILY_API_KEY` los agentes funcionan pero sin búsqueda web en tiempo real.

### 2. Instalar dependencias

```bash
# Backend
cd backend
npm install

# Frontend (en otra terminal)
cd frontend
npm install
```

### 3. Arrancar

```bash
# Terminal 1 – Backend
cd backend
npm run dev

# Terminal 2 – Frontend
cd frontend
npm run dev
```

Abre **http://localhost:5173** en tu navegador.

---

## Servidor MCP (opcional)

El servidor MCP expone `web_search` como herramienta para Claude Code:

```bash
claude mcp add nextstop-search -- node /ruta/completa/NextStop/backend/src/mcp/server.js
```

Requiere `TAVILY_API_KEY` en el entorno.

---

## Cómo funciona

```
Usuario rellena el formulario
        ↓
POST /api/plan/generate
        ↓
4 agentes en paralelo (Promise.all):
  ├── Agente Alojamiento   → zonas + hoteles + precios
  ├── Agente Actividades   → itinerario día a día (mañana/tarde/noche)
  ├── Agente Restaurantes  → mejores restaurantes por zona y precio
  └── Agente Tips          → transporte + costumbres + presupuesto
        ↓
Orquestador combina los 4 resultados
        ↓
SSE stream → Frontend actualiza en tiempo real
        ↓
Itinerario visual con tarjetas por día + mapa interactivo
```

Cada agente usa `web_search` (Tavily) para obtener información actualizada del destino.

---

## Estilos de viaje disponibles

| Estilo | Enfoque |
|---|---|
| Cultural | Museos, historia, arquitectura, arte |
| Gastronomía | Mercados, restaurantes locales, catas |
| Fiesta | Ambiente nocturno, bares, clubs |
| Relax | Spas, playas, paseos sin prisas |
| Aventura | Senderismo, deportes, naturaleza |

---

## Origen y licencia

Proyecto desarrollado como ejercicio de brainstorming durante mis prácticas, y subido aquí como pieza de portfolio personal. El código se comparte con fines demostrativos — todos los derechos reservados.
