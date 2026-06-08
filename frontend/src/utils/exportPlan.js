// Genera un resumen en texto plano del plan, listo para compartir o copiar.

export function buildShareText(plan) {
  const { metadata, itinerario = [] } = plan;
  const lines = [];

  lines.push(`✈️ Mi viaje a ${metadata?.destino} — generado con NextStop`);
  lines.push(`🗓️ ${metadata?.dias} días · 💶 ${metadata?.presupuesto?.toLocaleString('es-ES')}€ · estilo ${metadata?.estilo}`);
  lines.push('');

  itinerario.forEach((day) => {
    lines.push(`— Día ${day.dia}: ${day.titulo} —`);
    ['manana', 'tarde', 'noche'].forEach((momento) => {
      const bloque = day[momento];
      if (!bloque?.actividades?.length) return;
      const etiqueta = { manana: 'Mañana', tarde: 'Tarde', noche: 'Noche' }[momento];
      const actividades = bloque.actividades.map((a) => `${a.emoji || ''} ${a.nombre}`).join(' · ');
      lines.push(`${etiqueta}: ${actividades}`);
    });
    if (day.noche?.restaurante) {
      lines.push(`Para cenar: ${day.noche.restaurante.emoji || ''} ${day.noche.restaurante.nombre} (${day.noche.restaurante.zona})`);
    }
    lines.push('');
  });

  lines.push(`Plan completo generado en NextStop · Tu viaje a medida en un clic`);

  return lines.join('\n');
}

export async function sharePlan(plan) {
  const text = buildShareText(plan);
  const title = `Mi viaje a ${plan.metadata?.destino}`;

  if (navigator.share) {
    try {
      await navigator.share({ title, text });
      return { method: 'share' };
    } catch (err) {
      if (err?.name === 'AbortError') return { method: 'cancelled' };
      // si falla el share nativo, seguimos con el portapapeles
    }
  }

  await navigator.clipboard.writeText(text);
  return { method: 'clipboard' };
}
