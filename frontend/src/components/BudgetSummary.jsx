const BUDGET_ITEMS = [
  { key: 'alojamiento', label: 'Alojamiento', color: 'bg-blue-500' },
  { key: 'comida', label: 'Comida', color: 'bg-orange-500' },
  { key: 'actividades', label: 'Actividades', color: 'bg-purple-500' },
  { key: 'transporte_local', label: 'Transporte local', color: 'bg-green-500' },
  { key: 'extras', label: 'Extras', color: 'bg-pink-500' },
];

export default function BudgetSummary({ presupuesto }) {
  if (!presupuesto) return null;

  const { total_estimado, por_dia, desglose = {}, consejos_ahorro = [] } = presupuesto;
  const total = total_estimado || 0;

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
        💰 Presupuesto estimado
      </h2>

      {/* Totals */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Total del viaje</p>
          <p className="text-3xl font-bold">{total.toLocaleString('es-ES')}€</p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-coral-500 to-coral-600 text-white text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Media por día</p>
          <p className="text-3xl font-bold">{(por_dia || 0).toLocaleString('es-ES')}€</p>
        </div>
      </div>

      {/* Breakdown */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-shadow mb-6">
        <div className="p-4 border-b border-gray-100">
          <p className="font-bold text-gray-700 text-sm uppercase tracking-wider">Desglose por categorías</p>
        </div>
        <div className="divide-y divide-gray-50">
          {BUDGET_ITEMS.map(({ key, label, color }) => {
            const amount = desglose[key] || 0;
            const pct = total > 0 ? Math.round((amount / total) * 100) : 0;
            return (
              <div key={key} className="px-4 py-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                  <span className="text-sm font-bold text-gray-900">
                    {amount.toLocaleString('es-ES')}€
                    <span className="text-xs font-normal text-gray-400 ml-1">({pct}%)</span>
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${color} rounded-full transition-all duration-1000`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Saving tips */}
      {consejos_ahorro.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            💡 Consejos para ahorrar
          </h3>
          <ul className="space-y-2">
            {consejos_ahorro.map((tip, i) => (
              <li key={i} className="text-sm text-gray-700 bg-green-50 border border-green-100 rounded-xl px-4 py-2.5">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
