import { useState, useCallback } from 'react';
import TravelForm from './components/TravelForm.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import ItineraryView from './components/ItineraryView.jsx';
import { savePlan, getHistory, deletePlan } from './utils/planHistory.js';

export default function App() {
  const [phase, setPhase] = useState('form'); // 'form' | 'loading' | 'result'
  const [plan, setPlan] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState({ message: '', progress: 0, completedAgents: [] });
  const [history, setHistory] = useState(getHistory);

  const handleGenerate = useCallback(async (params) => {
    setPhase('loading');
    setLoadingStatus({ message: 'Iniciando agentes...', progress: 5, completedAgents: [] });

    try {
      const res = await fetch('/api/plan/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Error al iniciar la generación');
      }

      const { jobId } = await res.json();

      await new Promise((resolve, reject) => {
        const es = new EventSource(`/api/plan/stream/${jobId}`);

        es.onmessage = (e) => {
          try {
            const payload = JSON.parse(e.data);
            const { event, data } = payload;

            if (event === 'status') {
              setLoadingStatus((prev) => ({ ...prev, message: data.message, progress: data.progress }));
            }

            if (event === 'agent_complete') {
              setLoadingStatus((prev) => ({
                ...prev,
                progress: data.progress,
                completedAgents: [...prev.completedAgents, data.agent],
              }));
            }

            if (event === 'plan_complete') {
              es.close();
              savePlan(data);
              setHistory(getHistory());
              setPlan(data);
              setPhase('result');
              resolve();
            }

            if (event === 'plan_error') {
              es.close();
              reject(new Error(data.error));
            }
          } catch (_) {}
        };

        es.onerror = () => {
          es.close();
          reject(new Error('Error en la conexión con el servidor'));
        };
      });
    } catch (err) {
      alert(`❌ Error: ${err.message}`);
      setPhase('form');
    }
  }, []);

  const handleReset = useCallback(() => {
    setPlan(null);
    setPhase('form');
    setLoadingStatus({ message: '', progress: 0, completedAgents: [] });
  }, []);

  const handleLoadHistory = useCallback((savedPlan) => {
    setPlan(savedPlan);
    setPhase('result');
  }, []);

  const handleDeleteHistory = useCallback((id) => {
    deletePlan(id);
    setHistory(getHistory());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {phase === 'form' && (
        <TravelForm
          onGenerate={handleGenerate}
          history={history}
          onLoadHistory={handleLoadHistory}
          onDeleteHistory={handleDeleteHistory}
        />
      )}
      {phase === 'loading' && <LoadingScreen status={loadingStatus} />}
      {phase === 'result' && plan && <ItineraryView plan={plan} onReset={handleReset} />}
    </div>
  );
}
