const HISTORY_KEY = 'nextstop_history';
const MAX_HISTORY = 10;

export function savePlan(plan) {
  try {
    const history = getHistory();
    const entry = {
      id: Date.now(),
      savedAt: new Date().toISOString(),
      destino: plan.metadata?.destino,
      dias: plan.metadata?.dias,
      presupuesto: plan.metadata?.presupuesto,
      estilo: plan.metadata?.estilo,
      plan,
    };
    const updated = [entry, ...history].slice(0, MAX_HISTORY);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    return entry.id;
  } catch {
    return null;
  }
}

export function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch {
    return [];
  }
}

export function deletePlan(id) {
  try {
    const updated = getHistory().filter((e) => e.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch {}
}

export function relativeTime(isoDate) {
  const diff = Date.now() - new Date(isoDate).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'ahora mismo';
  if (mins < 60) return `hace ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `hace ${hours}h`;
  const days = Math.floor(hours / 24);
  return `hace ${days} ${days === 1 ? 'día' : 'días'}`;
}
