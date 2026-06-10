import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import planRouter from './routes/plan.js';
import weatherRouter from './routes/weather.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.use('/api/plan', planRouter);
app.use('/api/weather', weatherRouter);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', version: '1.0.0' }));

app.use((_req, res) => res.status(404).json({ error: 'Ruta no encontrada' }));

app.use((err, _req, res, _next) => {
  console.error('[Error]', err.message);
  res.status(500).json({ error: err.message || 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`\n🌍 NextStop API corriendo en http://localhost:${PORT}`);
  console.log(`📋 Anthropic: ${process.env.ANTHROPIC_API_KEY ? '✅ configurado' : '❌ no configurado → MODO DEMO activo'}`);
  console.log(`🔍 Tavily:   ${process.env.TAVILY_API_KEY ? '✅ configurado' : '⚠️  no configurado (sin búsqueda web)'}`)
  console.log(`🌤️  Weather:  ${process.env.OPENWEATHER_API_KEY ? '✅ configurado' : '⚠️  no configurado (widget de clima desactivado)'}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log('\n🎭 MODO DEMO: los planes usarán datos de ejemplo de Barcelona.');
    console.log('   Añade ANTHROPIC_API_KEY al .env para activar los agentes reales.\n');
  } else {
    console.log('');
  }
});
