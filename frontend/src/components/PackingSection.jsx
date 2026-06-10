export default function PackingSection({ equipaje }) {
  if (!equipaje) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        🧳 Lista de equipaje
      </h2>

      {/* Documentos */}
      {equipaje.documentos?.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-3">Documentos</h3>
          <div className="space-y-2">
            {equipaje.documentos.map((doc, i) => (
              <div key={i} className="flex items-start gap-2 p-3 bg-red-50 rounded-xl border border-red-100">
                <span className="text-red-500 mt-0.5 flex-shrink-0">📄</span>
                <p className="text-sm text-red-800">{doc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ropa */}
      {equipaje.ropa?.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-3">Ropa</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {equipaje.ropa.map((cat, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 card-shadow">
                <p className="font-bold text-gray-900 text-sm mb-2">{cat.categoria}</p>
                <ul className="space-y-1">
                  {cat.items?.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tecnología */}
      {equipaje.tecnologia?.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-3">Tecnología</h3>
          <div className="flex flex-wrap gap-2">
            {equipaje.tecnologia.map((item, i) => (
              <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-800 text-xs rounded-full font-medium border border-blue-100">
                💻 {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Salud e higiene */}
      {equipaje.salud_higiene?.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-3">Salud e higiene</h3>
          <div className="flex flex-wrap gap-2">
            {equipaje.salud_higiene.map((item, i) => (
              <span key={i} className="px-3 py-1.5 bg-green-50 text-green-800 text-xs rounded-full font-medium border border-green-100">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* No olvides */}
      {equipaje.esenciales?.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-3">No olvides</h3>
          <div className="space-y-2">
            {equipaje.esenciales.map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-amber-500 flex-shrink-0">⚠️</span>
                <p className="text-sm text-amber-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Consejo maleta */}
      {equipaje.consejo_maleta && (
        <div className="p-4 bg-brand-50 border border-brand-100 rounded-2xl">
          <p className="font-bold text-brand-800">Sobre la maleta</p>
          <p className="text-brand-700 text-sm mt-1">{equipaje.consejo_maleta}</p>
        </div>
      )}
    </section>
  );
}
