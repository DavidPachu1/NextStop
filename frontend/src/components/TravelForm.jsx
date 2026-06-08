import { useState } from 'react';

const STYLES = [
  { id: 'cultural', emoji: '🏛️', label: 'Cultural', desc: 'Historia, arte y museos' },
  { id: 'gastronomia', emoji: '🍽️', label: 'Gastronomía', desc: 'Sabores únicos' },
  { id: 'fiesta', emoji: '🎵', label: 'Fiesta', desc: 'Ambiente y nightlife' },
  { id: 'relax', emoji: '🌴', label: 'Relax', desc: 'Desconexión total' },
  { id: 'aventura', emoji: '🏔️', label: 'Aventura', desc: 'Adrenalina y naturaleza' },
];

export default function TravelForm({ onGenerate }) {
  const [form, setForm] = useState({ destination: '', days: 5, budget: 1000, style: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.destination.trim()) e.destination = 'Introduce un destino';
    if (form.days < 1 || form.days > 30) e.days = 'Entre 1 y 30 días';
    if (form.budget < 100) e.budget = 'Mínimo 100€';
    if (!form.style) e.style = 'Elige tu estilo de viaje';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await onGenerate(form);
    setLoading(false);
  };

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  // Permite vaciar el campo (sin forzarlo a 0) y evita ceros a la izquierda tipo "05"
  const setNumber = (key, raw) => {
    if (raw === '') return set(key, '');
    const cleaned = raw.replace(/^0+(?=\d)/, '');
    const num = Number(cleaned);
    set(key, Number.isNaN(num) ? '' : num);
  };

  return (
    <div className="min-h-screen gradient-hero flex flex-col">
      {/* Header */}
      <header className="pt-12 pb-6 px-6 text-center text-white">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-3 tracking-tight drop-shadow-lg">
          NextStop
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium">
          Tu viaje a medida en un clic
        </p>
      </header>

      {/* Form Card */}
      <main className="flex-1 flex items-start justify-center px-4 pb-16">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 animate-slide-up">

          {/* Destination */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📍 ¿A dónde vas?
            </label>
            <input
              type="text"
              value={form.destination}
              onChange={(e) => set('destination', e.target.value)}
              placeholder="Barcelona, Tokio, Nueva York, Marrakech..."
              className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-brand-500 focus:outline-none text-gray-900 text-lg transition-colors placeholder:text-gray-400"
            />
            {errors.destination && <p className="mt-1.5 text-sm text-red-500">{errors.destination}</p>}
          </div>

          {/* Days + Budget row */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🗓️ Días de viaje
              </label>
              <input
                type="number"
                min="1" max="30"
                value={form.days}
                onChange={(e) => setNumber('days', e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-brand-500 focus:outline-none text-gray-900 text-lg text-center font-bold transition-colors"
              />
              {errors.days && <p className="mt-1.5 text-sm text-red-500">{errors.days}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                💶 Presupuesto total
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="100"
                  value={form.budget}
                  onChange={(e) => setNumber('budget', e.target.value)}
                  className="w-full pl-4 pr-10 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-brand-500 focus:outline-none text-gray-900 text-lg font-bold transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">€</span>
              </div>
              {errors.budget && <p className="mt-1.5 text-sm text-red-500">{errors.budget}</p>}
            </div>
          </div>

          {/* Style picker */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              🎯 Estilo de viaje
            </label>
            <div className="grid grid-cols-5 gap-2">
              {STYLES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => set('style', s.id)}
                  className={`style-btn ${form.style === s.id ? 'active' : 'bg-gray-50'}`}
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-xs font-semibold text-gray-800">{s.label}</span>
                  <span className="text-xs text-gray-500 hidden md:block">{s.desc}</span>
                </button>
              ))}
            </div>
            {errors.style && <p className="mt-2 text-sm text-red-500">{errors.style}</p>}
          </div>

          {/* Budget summary */}
          {form.budget > 0 && form.days > 0 && (
            <div className="mb-6 p-4 rounded-2xl bg-brand-50 border border-brand-100">
              <p className="text-sm text-brand-700 font-medium">
                💡 Aprox. <span className="font-bold">{Math.round(form.budget / form.days)}€/día</span> para {form.days} {form.days === 1 ? 'día' : 'días'}
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{ background: 'linear-gradient(135deg, #0b1120 0%, #1e1b4b 55%, #4338ca 100%)' }}
            className="group relative w-full py-4 rounded-2xl font-bold text-lg text-white overflow-hidden border border-white/10 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-coral-500/20 active:translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {/* destello cálido que recorre el botón al pasar el cursor, como un sello de embarque */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-coral-400/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative inline-flex items-center justify-center gap-2.5">
              {loading ? (
                '⏳ Preparando tu aventura...'
              ) : (
                <>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-rotate-6">✈️</span>
                  <span>Generar mi itinerario</span>
                </>
              )}
            </span>
          </button>

          <p className="mt-4 text-center text-xs text-gray-400">
            4 agentes IA trabajarán simultáneamente · Puede tardar 30-60 segundos
          </p>
        </div>
      </main>
    </div>
  );
}
