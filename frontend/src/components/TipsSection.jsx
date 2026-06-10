function mapsUrl(name, location) {
  return `https://www.google.com/maps/search/${encodeURIComponent(`${name} ${location}`)}`;
}

export default function TipsSection({ tips, restaurantes, destino = '' }) {
  if (!tips && !restaurantes) return null;

  const transporte = tips?.transporte || [];
  const costumbres = tips?.costumbres || [];
  const frases = tips?.frases_utiles || [];
  const apps = tips?.apps_recomendadas || [];
  const restaurantesDestacados = restaurantes?.destacados || [];

  return (
    <section className="space-y-8">
      {/* Transport */}
      {transporte.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🚇 Transporte
          </h2>
          <div className="space-y-3">
            {transporte.map((t, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 card-shadow">
                <p className="font-bold text-gray-900 text-sm">{t.titulo}</p>
                {t.detalle && <p className="text-gray-600 text-xs mt-0.5">{t.detalle}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Customs */}
      {costumbres.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🌍 Cultura y costumbres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {costumbres.map((c, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 card-shadow">
                <p className="font-bold text-gray-900 text-sm">{c.titulo}</p>
                {c.detalle && <p className="text-gray-600 text-xs mt-0.5">{c.detalle}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Featured restaurants */}
      {restaurantesDestacados.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🍽️ Restaurantes que no puedes perderte
          </h2>
          <div className="space-y-3">
            {restaurantesDestacados.map((r, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 card-shadow">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-gray-900">{r.nombre}</p>
                  {r.precio_persona && (
                    <span className="text-sm font-bold text-coral-500 flex-shrink-0">{r.precio_persona}</span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {r.zona && <span className="text-xs text-gray-500">{r.zona}</span>}
                  {r.tipo && (
                    <span className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                      {r.tipo}
                    </span>
                  )}
                  <a
                    href={mapsUrl(r.nombre, r.zona || destino)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-600 hover:text-brand-700 font-medium"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
                {r.especialidad && (
                  <p className="text-xs text-gray-600 mt-1">
                    <span className="font-semibold">Especialidad:</span> {r.especialidad}
                  </p>
                )}
                {r.por_que && (
                  <p className="text-xs text-gray-500 mt-1 italic">"{r.por_que}"</p>
                )}
              </div>
            ))}
          </div>
          {restaurantes?.donde_no_ir && (
            <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-2xl">
              <p className="text-sm text-red-700">
                <span className="font-bold">⚠️ Evita:</span> {restaurantes.donde_no_ir}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Useful phrases */}
      {frases.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            💬 Frases útiles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {frases.map((f, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 card-shadow">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">{f.es}</p>
                <p className="font-display font-bold text-xl text-gray-900 mt-1">{f.local}</p>
                {f.pronunciacion && (
                  <p className="inline-block text-xs text-brand-700 bg-brand-50 mt-2 px-2.5 py-1 rounded-full">
                    {f.pronunciacion}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Apps */}
      {apps.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            📱 Apps imprescindibles
          </h2>
          <div className="flex flex-wrap gap-2">
            {apps.map((app, i) => (
              <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                {app}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Emergency */}
      {tips?.emergencias && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
          <p className="font-bold text-red-800 flex items-center gap-2">🆘 Emergencias</p>
          <p className="text-red-700 text-sm mt-1">{tips.emergencias}</p>
        </div>
      )}

      {/* Best time */}
      {tips?.mejor_epoca && (
        <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl">
          <p className="font-bold text-amber-800 flex items-center gap-2">📅 Mejor época para visitar</p>
          <p className="text-amber-700 text-sm mt-1">{tips.mejor_epoca}</p>
        </div>
      )}
    </section>
  );
}
