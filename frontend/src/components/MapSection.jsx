import { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getCityCenter, findZoneCoords } from '../data/zoneCoordinates.js';

const stayIcon = L.divIcon({
  html: '<span style="font-size:22px;line-height:1">🏨</span>',
  className: 'bg-transparent border-0',
  iconSize: [28, 28],
  iconAnchor: [14, 26],
  popupAnchor: [0, -24],
});

const foodIcon = L.divIcon({
  html: '<span style="font-size:22px;line-height:1">🍽️</span>',
  className: 'bg-transparent border-0',
  iconSize: [28, 28],
  iconAnchor: [14, 26],
  popupAnchor: [0, -24],
});

export default function MapSection({ plan, active }) {
  const cityName = plan._demoSource || plan.metadata?.destino;
  const center = getCityCenter(cityName);

  const stayMarkers = useMemo(() => {
    const zonas = plan.alojamiento?.zonas || [];
    return zonas
      .map((z) => {
        const found = findZoneCoords(cityName, z.nombre);
        return found ? { ...z, ...found } : null;
      })
      .filter(Boolean);
  }, [plan, cityName]);

  const foodMarkers = useMemo(() => {
    const restaurantes = plan.restaurantes?.destacados || [];
    const byZone = new Map();
    restaurantes.forEach((r) => {
      const found = findZoneCoords(cityName, r.zona);
      if (!found) return;
      if (!byZone.has(found.label)) byZone.set(found.label, { ...found, restaurantes: [] });
      byZone.get(found.label).restaurantes.push(r);
    });
    return [...byZone.values()];
  }, [plan, cityName]);

  if (!center) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-4xl mb-3">🗺️</p>
        <p>Aún no tenemos datos de mapa para este destino.</p>
        <p className="text-sm mt-1">Disponible para Barcelona, París y Roma en el modo demo.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-3">
        📍 Zonas de alojamiento y restaurantes recomendados sobre el mapa de {cityName}.
      </p>
      <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: '420px' }}>
        {active ? (
          // Montamos el mapa solo cuando la pestaña está visible: si Leaflet se inicializa
          // con el contenedor oculto (display: none), mide mal el tamaño y solo pinta una esquina.
          <MapContainer
            key={cityName}
            center={center.coords}
            zoom={center.zoom}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stayMarkers.map((m) => (
              <Marker key={`stay-${m.label}`} position={m.coords} icon={stayIcon}>
                <Popup>
                  <strong>{m.emoji} {m.nombre}</strong><br />
                  {m.precio_rango} · {m.nivel_precio}
                  <p className="text-xs text-gray-500 mt-1 max-w-[200px]">{m.descripcion}</p>
                </Popup>
              </Marker>
            ))}
            {foodMarkers.map((m) => (
              <Marker key={`food-${m.label}`} position={m.coords} icon={foodIcon}>
                <Popup>
                  <strong>🍽️ {m.label}</strong>
                  <ul className="mt-1 text-xs space-y-0.5">
                    {m.restaurantes.map((r) => (
                      <li key={r.nombre}>{r.emoji} <strong>{r.nombre}</strong> — {r.especialidad}</li>
                    ))}
                  </ul>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-300">
            <span className="text-4xl">🗺️</span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
        <span className="flex items-center gap-1.5"><span className="text-lg">🏨</span> Zonas de alojamiento recomendadas</span>
        <span className="flex items-center gap-1.5"><span className="text-lg">🍽️</span> Restaurantes destacados</span>
      </div>
    </div>
  );
}
