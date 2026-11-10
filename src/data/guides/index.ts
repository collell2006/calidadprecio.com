import type { Guide } from '../../types/guide';
import { lavadorasGuide } from './lavadoras';
import { freidorasGuide } from './freidoras';
import { monitoresGuide } from './monitores-pc';
import { sillasGuide } from './sillas-ergonomicas';
import { movilesGuide } from './moviles';

export const ALL_GUIDES: Guide[] = [
  lavadorasGuide,
  freidorasGuide,
  monitoresGuide,
  sillasGuide,
  movilesGuide,
];

export function getAllGuides(): Guide[] {
  return ALL_GUIDES;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return ALL_GUIDES.find((g) => g.slug === slug);
}

export function getGuidesByCategory(categorySlug: string): Guide[] {
  return ALL_GUIDES.filter((g) => g.category === categorySlug);
}
