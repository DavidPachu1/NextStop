function mapsUrl(name, location) {
  return `https://www.google.com/maps/search/${encodeURIComponent(`${name} ${location}`)}`;
}

export default function AccommodationSection({ alojamiento, destino = '' }) {
  if (!alojamiento) return null;

  const { zonas = [], opciones = [], recomendacion } = alojamiento;

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
        🏨 Alojamiento recomendado
      </h2>

      {/* Recommendation banner */}
      {recomendacion?.nombre && (
        <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Nuestra recomendación</p>
          <p className="text-xl font-bold">{recomendacion.nombre}</p>
          {recomendacion.motivo && <p className="text-white/85 text-sm mt-1">{recomendacion.motivo}</p>}
          {recomendacion.precio_total_estancia && (
            <p className="mt-2 text-coral-400 font-bold">{recomendacion.precio_total_estancia}</p>
          )}
        </div>
      )}

      {/* Zones */}
      {zonas.length > 0 && (
        <div className="mb-6">
          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-3">Mejores zonas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {zonas.map((z, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 card-shadow">
                <p className="font-bold text-gray-900">{z.nombre}</p>
                <p className="text-xs text-gray-600 mt-0.5">{z.descripcion}</p>
                {z.precio_rango && (
                  <span className="inline-block mt-2 text-xs bg-brand-100 text-brand-700 font-semibold px-2 py-0.5 rounded-full">
                    {z.precio_rango}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Options */}
      {opciones.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-3">Opciones destacadas</h3>
          <div className="space-y-3">
            {opciones.map((op, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-gray-100 card-shadow">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-gray-900">{op.nombre}</p>
                  {op.precio_noche && (
                    <span className="text-sm font-bold text-coral-500 flex-shrink-0">{op.precio_noche}</span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {op.tipo && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium capitalize">
                      {op.tipo}
                    </span>
                  )}
                  <a
                    href={mapsUrl(op.nombre, op.zona || destino)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-600 hover:text-brand-700 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver en Google Maps →
                  </a>
                </div>
                {op.descripcion && <p className="text-xs text-gray-600 mt-1">{op.descripcion}</p>}
                {op.puntos_fuertes?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {op.puntos_fuertes.map((p, j) => (
                      <span key={j} className="text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
