import { DEMO_PLAN as BARCELONA } from './demoData.js';
import { PARIS } from './destinations/paris.js';
import { ROMA } from './destinations/roma.js';
import { MADRID } from './destinations/madrid.js';
import { IBIZA } from './destinations/ibiza.js';

const DESTINATIONS = [
  {
    data: BARCELONA,
    name: 'Barcelona',
    keywords: ['barcelona', 'bcn'],
  },
  {
    data: PARIS,
    name: 'París',
    keywords: ['paris', 'parís', 'pariz', 'france', 'francia'],
  },
  {
    data: ROMA,
    name: 'Roma',
    keywords: ['roma', 'rome', 'italy', 'italia'],
  },
  {
    data: MADRID,
    name: 'Madrid',
    keywords: ['madrid', 'mad'],
  },
  {
    data: IBIZA,
    name: 'Ibiza',
    keywords: ['ibiza', 'eivissa', 'isla blanca'],
  },
];

function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

/**
 * Devuelve el dataset demo más adecuado para el destino introducido.
 * Si no hay coincidencia, usa Barcelona como fallback.
 */
export function selectDestination(destination) {
  const norm = normalize(destination);
  const match = DESTINATIONS.find((d) =>
    d.keywords.some((kw) => norm.includes(kw))
  );
  return match || DESTINATIONS[0]; // fallback: Barcelona
}

export const AVAILABLE_DEMO_DESTINATIONS = DESTINATIONS.map((d) => d.name);
