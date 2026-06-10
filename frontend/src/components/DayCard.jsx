import { useState } from 'react';

const BLOCK_CONFIG = {
  manana: {
    label: 'Mañana',
    time: '9:00 – 14:00',
    icon: '🌅',
    accent: 'border-orange-100',
    tint: 'bg-orange-50/50',
    badge: 'bg-orange-100',
    textColor: 'text-orange-700',
  },
  tarde: {
    label: 'Tarde',
    time: '14:00 – 20:00',
    icon: '☀️',
    accent: 'border-amber-100',
    tint: 'bg-amber-50/50',
    badge: 'bg-amber-100',
    textColor: 'text-amber-700',
  },
  noche: {
    label: 'Noche',
    time: '20:00 – …',
    icon: '🌙',
    accent: 'border-indigo-100',
    tint: 'bg-indigo-50/50',
    badge: 'bg-indigo-100',
    textColor: 'text-indigo-700',
  },
};

function ActivityItem({ act }) {
  return (
    <div className="py-2 border-b border-black/5 last:border-0">
      <p className="font-semibold text-gray-900 text-sm">{act.nombre}</p>
      {act.descripcion && (
        <p className="text-gray-600 text-xs mt-0.5 line-clamp-2">{act.descripcion}</p>
      )}
      <div className="flex gap-3 mt-1 text-xs text-gray-500">
        {act.duracion && <span>{act.duracion}</span>}
        {act.precio && <span className="text-brand-600 font-medium">{act.precio}</span>}
      </div>
    </div>
  );
}

function RestaurantBadge({ restaurant }) {
  if (!restaurant) return null;
  const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(`${restaurant.nombre} ${restaurant.zona || ''}`)}`;
  return (
    <div className="mt-3 p-3 rounded-xl bg-white/70 border border-white/50">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
        Cena recomendada
      </p>
      <div className="flex items-start justify-between gap-2">
        <p className="font-bold text-gray-900 text-sm">{restaurant.nombre}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-brand-600 hover:text-brand-700 font-medium flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          Maps →
        </a>
      </div>
      {restaurant.especialidad && (
        <p className="text-xs text-gray-600">{restaurant.especialidad}</p>
      )}
      {restaurant.precio_persona && (
        <p className="text-xs text-brand-600 font-semibold mt-1">{restaurant.precio_persona}</p>
      )}
    </div>
  );
}

function TimeBlock({ blockKey, block }) {
  const config = BLOCK_CONFIG[blockKey];
  if (!block) return null;

  const actividades = block.actividades || [];
  const consejo = block.consejo;
  const restaurante = block.restaurante;

  if (actividades.length === 0 && !restaurante && !consejo) return null;

  return (
    <div className={`rounded-2xl overflow-hidden border ${config.accent}`}>
      <div className={`${config.tint} px-4 py-3 flex items-center gap-3 border-b ${config.accent}`}>
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-base ${config.badge}`}>
          {config.icon}
        </span>
        <div>
          <p className={`font-bold text-sm ${config.textColor}`}>{config.label}</p>
          <p className="text-xs text-gray-400">{config.time}</p>
        </div>
      </div>
      <div className="bg-white p-4">
        {actividades.map((act, i) => (
          <ActivityItem key={i} act={act} />
        ))}
        {blockKey === 'noche' && <RestaurantBadge restaurant={restaurante} />}
        {consejo && (
          <p className={`mt-3 text-xs ${config.textColor} ${config.tint} rounded-xl px-3 py-2 border ${config.accent}`}>
            <span className="font-semibold">Consejo: </span>{consejo}
          </p>
        )}
      </div>
    </div>
  );
}

export default function DayCard({ day, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-brand-50 ring-2 ring-brand-900 flex items-center justify-center flex-shrink-0">
            <span className="font-display font-bold text-xl text-brand-900">{day.dia}</span>
          </div>
          <div>
            <p className="font-bold text-gray-900">{day.titulo || `Día ${day.dia}`}</p>
            {day.coste_estimado > 0 && (
              <p className="text-sm text-brand-600 font-medium">~{day.coste_estimado}€ estimado</p>
            )}
          </div>
        </div>
        <span className={`text-gray-400 transition-transform duration-200 text-xl ${open ? 'rotate-180' : ''}`}>
          ⌄
        </span>
      </button>

      {/* Content */}
      {open && (
        <div className="px-5 pb-5 grid gap-3 lg:grid-cols-3 lg:items-start lg:gap-4 animate-fade-in">
          <TimeBlock blockKey="manana" block={day.manana} />
          <TimeBlock blockKey="tarde" block={day.tarde} />
          <TimeBlock blockKey="noche" block={day.noche} />
        </div>
      )}
    </div>
  );
}
