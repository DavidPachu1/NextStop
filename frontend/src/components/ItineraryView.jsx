import { useState } from 'react';
import DayCard from './DayCard.jsx';
import AccommodationSection from './AccommodationSection.jsx';
import TipsSection from './TipsSection.jsx';
import BudgetSummary from './BudgetSummary.jsx';
import MapSection from './MapSection.jsx';
import { sharePlan } from '../utils/exportPlan.js';

const STYLE_LABELS = {
  cultural: '🏛️ Cultural',
  gastronomia: '🍽️ Gastronomía',
  fiesta: '🎵 Fiesta',
  relax: '🌴 Relax',
  aventura: '🏔️ Aventura',
};

const TABS = [
  { id: 'itinerary', label: '🗓️ Itinerario' },
  { id: 'map', label: '🗺️ Mapa' },
  { id: 'accommodation', label: '🏨 Alojamiento' },
  { id: 'tips', label: '💡 Tips' },
  { id: 'budget', label: '💰 Presupuesto' },
];

export default function ItineraryView({ plan, onReset }) {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [shareNotice, setShareNotice] = useState('');
  const { metadata, itinerario = [], alojamiento, restaurantes, tips, presupuesto } = plan;

  const handleShare = async () => {
    try {
      const { method } = await sharePlan(plan);
      if (method === 'clipboard') setShareNotice('📋 Copiado al portapapeles');
      else if (method === 'share') setShareNotice('✅ ¡Compartido!');
      else return;
      setTimeout(() => setShareNotice(''), 2500);
    } catch {
      setShareNotice('❌ No se pudo compartir el plan');
      setTimeout(() => setShareNotice(''), 2500);
    }
  };

  const handleExportPdf = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo banner */}
      {plan._demo && (
        <div className="print:hidden bg-amber-400 text-amber-900 text-center text-sm font-semibold py-2 px-4">
          🎭 Modo demo — datos de ejemplo de {plan._demoSource || 'Barcelona'}.
          {plan._demoSource && plan.metadata?.destino !== plan._demoSource && (
            <span className="font-normal"> (Tu destino "{plan.metadata?.destino}" se mostrará con datos reales al activar la API.)</span>
          )}
        </div>
      )}

      {/* Hero header */}
      <div className="gradient-hero text-white px-4 pt-10 pb-20 print:hidden">
        <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center">
          <div className="mb-6 flex items-center justify-between gap-2">
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
            >
              ← Nuevo plan
            </button>
            <div className="flex items-center gap-2 relative">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                🔗 Compartir
              </button>
              <button
                onClick={handleExportPdf}
                className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                📄 Exportar PDF
              </button>
              {shareNotice && (
                <span className="absolute top-full right-0 mt-2 whitespace-nowrap glass rounded-full px-3 py-1.5 text-xs font-medium animate-fade-in">
                  {shareNotice}
                </span>
              )}
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2 drop-shadow">
            {metadata?.destino}
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-3 text-sm text-white/85 mt-3">
            <span className="glass px-3 py-1 rounded-full">
              🗓️ {metadata?.dias} {metadata?.dias === 1 ? 'día' : 'días'}
            </span>
            <span className="glass px-3 py-1 rounded-full">
              💶 {metadata?.presupuesto?.toLocaleString('es-ES')}€
            </span>
            <span className="glass px-3 py-1 rounded-full">
              {STYLE_LABELS[metadata?.estilo] || metadata?.estilo}
            </span>
          </div>
        </div>
      </div>

      {/* Print-only header (sustituye al hero oscuro al exportar a PDF) */}
      <div className="hidden print:block px-4 pt-6 pb-4 text-center border-b border-gray-200">
        <h1 className="font-display text-3xl font-bold mb-1">{metadata?.destino}</h1>
        <p className="text-sm text-gray-600">
          {metadata?.dias} {metadata?.dias === 1 ? 'día' : 'días'} · {metadata?.presupuesto?.toLocaleString('es-ES')}€ · {STYLE_LABELS[metadata?.estilo] || metadata?.estilo}
        </p>
      </div>

      {/* Sticky tabs */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm -mt-8">
        <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar gap-1 py-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content — al imprimir se muestran todas las secciones, no solo la activa */}
      <main className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 print:py-4">
        <section className={`${activeTab === 'itinerary' ? 'block' : 'hidden'} print:block animate-fade-in print:mb-8`}>
          <h2 className="hidden print:block text-lg font-bold mb-3">🗓️ Itinerario</h2>
          <div className="space-y-4">
            {itinerario.length > 0 ? (
              itinerario.map((day, i) => (
                <DayCard key={day.dia || i} day={day} index={i} />
              ))
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p className="text-4xl mb-3">🗓️</p>
                <p>No se pudo generar el itinerario. Inténtalo de nuevo.</p>
              </div>
            )}
          </div>
        </section>

        <section className={`${activeTab === 'map' ? 'block' : 'hidden'} print:hidden animate-fade-in`}>
          <MapSection plan={plan} active={activeTab === 'map'} />
        </section>

        <section className={`${activeTab === 'accommodation' ? 'block' : 'hidden'} print:block animate-fade-in print:mb-8`}>
          <h2 className="hidden print:block text-lg font-bold mb-3">🏨 Alojamiento</h2>
          <AccommodationSection alojamiento={alojamiento} />
        </section>

        <section className={`${activeTab === 'tips' ? 'block' : 'hidden'} print:block animate-fade-in print:mb-8`}>
          <h2 className="hidden print:block text-lg font-bold mb-3">💡 Tips</h2>
          <TipsSection tips={tips} restaurantes={restaurantes} />
        </section>

        <section className={`${activeTab === 'budget' ? 'block' : 'hidden'} print:block animate-fade-in print:mb-8`}>
          <h2 className="hidden print:block text-lg font-bold mb-3">💰 Presupuesto</h2>
          <BudgetSummary presupuesto={presupuesto} />
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center print:mt-6 print:pt-4">
          <p className="text-xs text-gray-400">
            Generado con NextStop · {metadata?.destino} · {new Date(metadata?.generado).toLocaleDateString('es-ES')}
          </p>
          <button
            onClick={onReset}
            className="print:hidden mt-4 px-6 py-2.5 bg-brand-600 text-white font-semibold rounded-2xl text-sm hover:bg-brand-700 transition-colors"
          >
            ✈️ Planificar otro viaje
          </button>
        </div>
      </main>
    </div>
  );
}
