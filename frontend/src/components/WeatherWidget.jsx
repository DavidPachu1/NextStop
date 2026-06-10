import { useState, useEffect } from 'react';

const ICONS = {
  '01': '☀️', '02': '⛅', '03': '☁️', '04': '☁️',
  '09': '🌧️', '10': '🌦️', '11': '⛈️', '13': '❄️', '50': '🌫️',
};

function weatherIcon(code) {
  return ICONS[code?.slice(0, 2)] || '🌡️';
}

export default function WeatherWidget({ destination }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!destination) return;
    fetch(`/api/weather/${encodeURIComponent(destination)}`)
      .then((r) => r.json())
      .then((data) => setWeather(data.available ? data : null))
      .catch(() => {});
  }, [destination]);

  if (!weather) return null;

  const forecasts = weather.forecasts?.slice(0, 5) || [];

  return (
    <div className="mb-6 p-4 bg-white rounded-2xl border border-gray-100 card-shadow">
      <p className="text-sm font-bold text-gray-700 mb-3">
        🌤️ Tiempo en {weather.ciudad}, {weather.pais} — próximas horas
      </p>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {forecasts.map((f, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-xl min-w-[72px] text-center"
          >
            <span className="text-2xl leading-none">{weatherIcon(f.icono)}</span>
            <span className="text-lg font-bold text-gray-900 leading-none">{f.temp}°</span>
            <span className="text-[10px] text-gray-500 capitalize leading-tight">{f.descripcion}</span>
            <span className="text-[10px] text-gray-400">{f.temp_min}° / {f.temp_max}°</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-2">Datos en tiempo real · OpenWeatherMap</p>
    </div>
  );
}
