import { Router } from 'express';
import { getWeather } from '../utils/weather.js';

const router = Router();

router.get('/:city', async (req, res) => {
  try {
    const weather = await getWeather(req.params.city);
    if (!weather) return res.json({ available: false });
    res.json({ available: true, ...weather });
  } catch {
    res.json({ available: false });
  }
});

export default router;
