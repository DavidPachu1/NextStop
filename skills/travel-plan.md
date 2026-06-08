# Skill: NextStop — Generador de Planes de Viaje

## Descripción

Esta skill define el formato exacto, el tono y la estructura del itinerario generado por los agentes de NextStop.

---

## Formato JSON de Salida

El sistema combina las respuestas de 4 agentes en esta estructura:

```json
{
  "metadata": {
    "destino": "string",
    "dias": "number",
    "presupuesto": "number (€)",
    "estilo": "cultural | gastronomia | fiesta | relax | aventura",
    "generado": "ISO date string"
  },
  "itinerario": [
    {
      "dia": "number",
      "titulo": "string (ej: 'Día 1: El corazón histórico te espera')",
      "manana": {
        "actividades": [
          {
            "nombre": "string",
            "descripcion": "string (max 120 chars, práctico y concreto)",
            "duracion": "string (ej: '2 horas')",
            "precio": "string (ej: '15€ / persona' o 'Gratis')",
            "emoji": "string (1 emoji representativo)",
            "tipo": "string (cultural | gastronomia | naturaleza | compras | relax)"
          }
        ],
        "consejo": "string (1 tip práctico corto para ese bloque)"
      },
      "tarde": {
        "actividades": [...],
        "consejo": "string"
      },
      "noche": {
        "actividades": [...],
        "restaurante": {
          "nombre": "string",
          "tipo": "string (ej: 'tapas tradicionales')",
          "zona": "string",
          "precio_persona": "string (ej: '25-35€')",
          "especialidad": "string",
          "ambiente": "string",
          "emoji": "string"
        },
        "consejo": "string"
      },
      "coste_estimado": "number (€ totales del día)"
    }
  ],
  "alojamiento": {
    "zonas": [
      {
        "nombre": "string",
        "descripcion": "string",
        "ideal_para": "string",
        "nivel_precio": "económico | medio | alto",
        "precio_rango": "string (ej: '60-120€/noche')",
        "emoji": "string"
      }
    ],
    "opciones": [
      {
        "nombre": "string",
        "tipo": "hotel | hostal | apartamento | boutique",
        "zona": "string",
        "precio_noche": "string",
        "descripcion": "string",
        "puntos_fuertes": ["string"],
        "emoji": "string"
      }
    ],
    "recomendacion": {
      "nombre": "string",
      "motivo": "string",
      "precio_total_estancia": "string"
    }
  },
  "restaurantes": {
    "destacados": [
      {
        "nombre": "string",
        "zona": "string",
        "tipo": "string",
        "precio_persona": "string",
        "especialidad": "string",
        "cuando_ir": "desayuno | almuerzo | cena | copas",
        "emoji": "string"
      }
    ]
  },
  "tips": {
    "transporte": [
      { "emoji": "string", "titulo": "string", "detalle": "string" }
    ],
    "costumbres": [
      { "emoji": "string", "titulo": "string", "detalle": "string" }
    ],
    "mejor_epoca": "string",
    "frases_utiles": [
      { "es": "string", "local": "string", "pronunciacion": "string" }
    ],
    "emergencias": "string (número de emergencias local)",
    "app_recomendadas": ["string"]
  },
  "presupuesto": {
    "total_estimado": "number (€)",
    "por_dia": "number (€)",
    "desglose": {
      "alojamiento": "number",
      "comida": "number",
      "actividades": "number",
      "transporte_local": "number",
      "extras": "number"
    },
    "consejos_ahorro": ["string (tip concreto para ahorrar)"]
  }
}
```

---

## Tono y Voz

| Atributo | Guía |
|---|---|
| **Persona gramatical** | Segunda persona: "Te recomendamos", "No te pierdas", "Aprovecha para..." |
| **Energía** | Entusiasta pero honesto. Vende el destino con autenticidad, no con clichés |
| **Nivel** | Práctico y concreto. Precios reales, horarios actuales, no vagas generalidades |
| **Emojis** | Usar con criterio: uno por actividad/tip/sección. No saturar el texto |
| **Idioma** | Español neutro. Conservar términos locales icónicos (ej: "Wabi-sabi", "Tapas") |

---

## Reglas por Bloque Horario

### 🌅 Mañana (9:00 – 14:00)
- Empezar con el **desayuno** (local, representativo del destino)
- 2–3 actividades principales (las más exigentes energéticamente)
- Priorizar visitas culturales, mercados, zonas históricas
- Incluir precio de entradas y horario de apertura

### ☀️ Tarde (14:00 – 20:00)
- **Almuerzo** incluido o referenciado
- Actividades más relajadas o de exploración
- Paseos, barrios, miradores, compras
- Tiempo libre sugerido si el itinerario lo permite

### 🌙 Noche (20:00 en adelante)
- **Cena recomendada** con detalle completo del restaurante
- Actividades de ocio adaptadas al estilo elegido:
  - Cultural → espectáculo, tablao, ópera
  - Fiesta → club, bar de copas, zona de ambiente
  - Relax → spa nocturno, paseo, terraza tranquila
  - Aventura → actividad nocturna, tour de estrellas
  - Gastronomía → cena degustación, mercado nocturno

---

## Presentación del Presupuesto

```
💰 Presupuesto total: 1.200€ (para 7 días)
📅 Media por día: 171€/día

Desglose:
  🏨 Alojamiento:    420€  (60€/noche × 7)
  🍽️  Comida:         280€  (40€/día × 7)
  🎭 Actividades:    200€  (entradas + tours)
  🚇 Transporte:      90€  (tarjeta de transporte + taxis)
  🛍️  Extras:         210€  (compras, imprevistos)

💡 Tips para ahorrar:
  - Compra el bono de transporte de 10 viajes
  - Visita los museos en días con entrada gratuita
  - Come el menú del día (12–15€) en lugar de carta
```

---

## Emojis de Referencia por Tipo

| Categoría | Emojis |
|---|---|
| Cultural / Museos | 🏛️ 🎨 📚 🏰 🗿 🎭 |
| Gastronomía | 🍽️ 🥘 🍷 🥂 🫕 🧀 |
| Naturaleza / Aventura | 🏔️ 🌊 🌿 🚵 🧗 🏄 |
| Playa / Relax | 🏖️ 🌴 ☀️ 🛁 🧘 💆 |
| Fiesta / Nightlife | 🎵 🍻 🕺 💃 🎶 🥳 |
| Transporte | 🚇 🚌 🚕 🚶 🛵 ✈️ |
| Alojamiento | 🏨 🏠 🛎️ 🛏️ |
| Tips / Avisos | 💡 ⚠️ ✅ 📍 🔑 👀 |
| Presupuesto | 💰 💳 🪙 💶 |
