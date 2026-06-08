import { Router } from 'express';
import { generateTravelPlan } from '../agents/index.js';
import { runDemoMode } from '../demo/demoRunner.js';

const router = Router();

const IS_DEMO = !process.env.ANTHROPIC_API_KEY;

const jobs = new Map();

router.post('/generate', async (req, res) => {
  const { destination, days, budget, style } = req.body;

  if (!destination || !days || !budget || !style) {
    return res.status(400).json({
      error: 'Faltan parámetros: destination, days, budget y style son obligatorios',
    });
  }

  if (days < 1 || days > 30) {
    return res.status(400).json({ error: 'Los días deben estar entre 1 y 30' });
  }

  if (budget < 100 || budget > 100000) {
    return res.status(400).json({ error: 'El presupuesto debe estar entre 100€ y 100.000€' });
  }

  const VALID_STYLES = ['cultural', 'gastronomia', 'fiesta', 'relax', 'aventura'];
  if (!VALID_STYLES.includes(style)) {
    return res.status(400).json({ error: `Estilo inválido. Opciones: ${VALID_STYLES.join(', ')}` });
  }

  const jobId = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  jobs.set(jobId, { status: 'pending', events: [], listeners: [] });

  res.json({ jobId });

  const job = jobs.get(jobId);

  const emit = (event, data) => {
    const payload = { event, data, ts: Date.now() };
    job.events.push(payload);
    job.listeners.forEach((send) => send(payload));
  };

  try {
    const params = { destination, days: Number(days), budget: Number(budget), style };
    const plan = IS_DEMO
      ? await runDemoMode(params, emit)
      : await generateTravelPlan(params, emit);
    job.status = 'done';
    job.plan = plan;
    const donePay = { event: 'plan_complete', data: plan, ts: Date.now() };
    job.events.push(donePay);
    job.listeners.forEach((send) => send(donePay));
  } catch (err) {
    console.error('[generate] Error:', err.message);
    job.status = 'error';
    job.error = err.message;
    const errPay = { event: 'plan_error', data: { error: err.message }, ts: Date.now() };
    job.events.push(errPay);
    job.listeners.forEach((send) => send(errPay));
  } finally {
    setTimeout(() => jobs.delete(jobId), 10 * 60 * 1000);
  }
});

router.get('/stream/:jobId', (req, res) => {
  const { jobId } = req.params;
  const job = jobs.get(jobId);

  if (!job) {
    return res.status(404).json({ error: 'Job no encontrado o expirado' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  const send = (payload) => {
    res.write(`data: ${JSON.stringify(payload)}\n\n`);
  };

  job.events.forEach(send);

  if (job.status === 'done' || job.status === 'error') {
    res.end();
    return;
  }

  job.listeners.push(send);

  const heartbeat = setInterval(() => res.write(': ping\n\n'), 25000);

  const cleanup = () => {
    clearInterval(heartbeat);
    const idx = job.listeners.indexOf(send);
    if (idx !== -1) job.listeners.splice(idx, 1);
  };

  req.on('close', cleanup);

  const doneSub = (payload) => {
    if (payload.event === 'plan_complete' || payload.event === 'plan_error') {
      setTimeout(() => { cleanup(); res.end(); }, 200);
    }
  };
  job.listeners.push(doneSub);
});

router.get('/health', (_req, res) => res.json({ status: 'ok', activeJobs: jobs.size }));

export default router;
