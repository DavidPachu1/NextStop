const AGENTS = [
  { id: 'alojamiento', emoji: '🏨', label: 'Agente Alojamiento', desc: 'Buscando las mejores zonas y hoteles...' },
  { id: 'actividades', emoji: '🎭', label: 'Agente Actividades', desc: 'Diseñando tu itinerario día a día...' },
  { id: 'restaurantes', emoji: '🍽️', label: 'Agente Restaurantes', desc: 'Encontrando los mejores sitios para comer...' },
  { id: 'tips', emoji: '💡', label: 'Agente Tips', desc: 'Recopilando consejos prácticos y presupuesto...' },
];

export default function LoadingScreen({ status }) {
  const { message, progress, completedAgents = [] } = status;

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="text-center text-white mb-10">
        <h1 className="font-display text-4xl font-bold mb-2">NextStop</h1>
        <p className="text-white/80 text-lg">Tus agentes IA están trabajando...</p>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md mb-8">
        <div className="flex justify-between text-white/80 text-sm mb-2">
          <span>{message}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-3 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Agent cards */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
        {AGENTS.map((agent) => {
          const done = completedAgents.includes(agent.id);
          const active = !done && progress > 5;

          return (
            <div
              key={agent.id}
              className={`glass rounded-2xl p-4 text-white transition-all duration-500 ${
                done ? 'bg-white/25 scale-[1.02]' : active ? 'bg-white/10' : 'bg-white/5 opacity-60'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{agent.emoji}</span>
                {done ? (
                  <span className="text-green-300 text-lg font-bold">✓</span>
                ) : active ? (
                  <span className="text-white/70 text-xs animate-spin-slow">⟳</span>
                ) : null}
              </div>
              <p className="font-semibold text-sm">{agent.label}</p>
              <p className="text-white/70 text-xs mt-0.5">
                {done ? '¡Completado!' : agent.desc}
              </p>
              {active && !done && (
                <div className="mt-2 h-0.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 rounded-full animate-shimmer" style={{ width: '60%' }} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-white/50 text-xs text-center">
        Buscando información actualizada en tiempo real ·{' '}
        {completedAgents.length}/{AGENTS.length} agentes completados
      </p>
    </div>
  );
}
