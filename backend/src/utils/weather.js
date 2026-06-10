export async function getWeather(city) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) return null;

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&cnt=5&lang=es`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return null;

    const data = await res.json();

    const forecasts = data.list.map((item) => ({
      dt: item.dt,
      temp: Math.round(item.main.temp),
      temp_max: Math.round(item.main.temp_max),
      temp_min: Math.round(item.main.temp_min),
      descripcion: item.weather[0].description,
      icono: item.weather[0].icon,
      humedad: item.main.humidity,
    }));

    return {
      ciudad: data.city.name,
      pais: data.city.country,
      forecasts,
    };
  } catch {
    return null;
  }
}
