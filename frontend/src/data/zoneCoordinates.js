// Coordenadas aproximadas de barrios/zonas para los destinos demo.
// Permite dibujar un mapa orientativo sin depender de geocodificación externa.

export const CITY_CENTERS = {
  Barcelona: { coords: [41.3851, 2.1734], zoom: 13 },
  París: { coords: [48.8566, 2.3522], zoom: 12 },
  Roma: { coords: [41.9028, 12.4964], zoom: 13 },
  Madrid: { coords: [40.4168, -3.7038], zoom: 13 },
  Ibiza: { coords: [38.9088, 1.4319], zoom: 11 },
};

const ZONES = {
  Barcelona: [
    { keywords: ['born', 'sant pere'], coords: [41.3850, 2.1810], label: 'El Born / Sant Pere' },
    { keywords: ['eixample esquerra'], coords: [41.3870, 2.1500], label: 'Eixample Esquerra' },
    { keywords: ['eixample'], coords: [41.3950, 2.1620], label: 'Eixample' },
    { keywords: ['barceloneta'], coords: [41.3784, 2.1925], label: 'Barceloneta' },
    { keywords: ['gracia', 'gràcia'], coords: [41.4036, 2.1565], label: 'Gràcia' },
    { keywords: ['gotic', 'gòtic', 'gótico'], coords: [41.3833, 2.1765], label: 'Barrio Gótico' },
    { keywords: ['rambla'], coords: [41.3809, 2.1735], label: 'Las Ramblas' },
  ],
  París: [
    { keywords: ['marais'], coords: [48.8589, 2.3622], label: 'Le Marais' },
    { keywords: ['germain'], coords: [48.8539, 2.3340], label: 'Saint-Germain-des-Prés' },
    { keywords: ['montmartre'], coords: [48.8867, 2.3431], label: 'Montmartre' },
    { keywords: ['bastille'], coords: [48.8530, 2.3694], label: 'Bastille' },
    { keywords: ['2º', '2e', 'boulevards'], coords: [48.8702, 2.3387], label: '2º arrondissement' },
    { keywords: ['10º', '10e'], coords: [48.8761, 2.3590], label: '10º arrondissement' },
  ],
  Roma: [
    { keywords: ['centro storico', 'campo de\' fiori', 'campo dei fiori'], coords: [41.8955, 12.4724], label: 'Centro Storico' },
    { keywords: ['trastevere'], coords: [41.8896, 12.4694], label: 'Trastevere' },
    { keywords: ['prati'], coords: [41.9080, 12.4620], label: 'Prati' },
    { keywords: ['testaccio'], coords: [41.8762, 12.4756], label: 'Testaccio' },
    { keywords: ['termini'], coords: [41.9010, 12.5020], label: 'Termini' },
  ],
  Madrid: [
    { keywords: ['malasana', 'malasaña'], coords: [40.4254, -3.7019], label: 'Malasaña' },
    { keywords: ['latina'], coords: [40.4106, -3.7110], label: 'La Latina' },
    { keywords: ['salamanca'], coords: [40.4292, -3.6829], label: 'Salamanca' },
    { keywords: ['chueca'], coords: [40.4231, -3.6975], label: 'Chueca' },
    { keywords: ['centro', 'sol'], coords: [40.4169, -3.7035], label: 'Centro / Sol' },
  ],
  Ibiza: [
    { keywords: ['bossa'], coords: [38.8825, 1.4178], label: "Playa d'en Bossa" },
    { keywords: ['santa eulalia'], coords: [38.9847, 1.5350], label: 'Santa Eulalia del Río' },
    { keywords: ['dalt vila', 'ibiza ciudad'], coords: [38.9067, 1.4341], label: 'Dalt Vila' },
    { keywords: ['san antonio', 'sant antoni'], coords: [38.9809, 1.3041], label: 'San Antonio' },
    { keywords: ['talamanca'], coords: [38.9180, 1.4419], label: 'Talamanca' },
    { keywords: ['cala comte', 'comte'], coords: [38.9637, 1.2186], label: 'Cala Comte' },
    { keywords: ["cala d'hort", 'cala dhort', "d'hort"], coords: [38.8694, 1.2186], label: "Cala d'Hort" },
    { keywords: ['sant rafel', 'san rafael'], coords: [38.9515, 1.3892], label: 'Sant Rafel' },
    { keywords: ['sant lloren', 'san lorenzo'], coords: [39.0000, 1.4333], label: 'Sant Llorenç' },
  ],
};

function normalize(str = '') {
  return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/**
 * Busca coordenadas aproximadas para una zona/barrio dentro de un destino conocido.
 * Devuelve null si el destino o la zona no están en el mapa de datos.
 */
export function findZoneCoords(destinationName, zoneName) {
  const zones = ZONES[destinationName];
  if (!zones || !zoneName) return null;
  const norm = normalize(zoneName);
  const match = zones.find((z) => z.keywords.some((kw) => norm.includes(normalize(kw))));
  return match ? { coords: match.coords, label: match.label } : null;
}

export function getCityCenter(destinationName) {
  return CITY_CENTERS[destinationName] || null;
}
