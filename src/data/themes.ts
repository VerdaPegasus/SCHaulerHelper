import type { ThemeId, ThemeDefinition } from '@/types';

export const THEMES: ThemeDefinition[] = [
  { id: 'stardust', name: 'Stardust' },
  { id: 'lux', name: 'Lux' },
  { id: 'pulse', name: 'Pulse' },
  { id: 'flow', name: 'Flow' },
  { id: 'dark', name: 'Dark' },
  { id: 'wednesday', name: 'Wednesday' },
  { id: 'moonshine', name: 'Moonshine' },
  { id: 'cassette', name: 'Cassette' },
  { id: 'cetacean', name: 'Cetacean' },
  { id: 'cargo-explorer', name: 'Cargo Explorer' },
];

export const THEME_COLOR_PALETTES: Record<ThemeId, string[]> = {
  stardust: ['#4dd4ac', '#ec4899', '#fbbf24', '#8b5cf6', '#3b82f6', '#f97316', '#84cc16', '#06b6d4'],
  lux: ['#B4F500', '#9DFF00', '#32CD32', '#00D9FF', '#FFD600', '#FF4757', '#7FE800', '#d9f99d'],
  pulse: ['#FF006E', '#00D4FF', '#00FFA3', '#FFC837', '#8B5CF6', '#FF8800', '#E63946', '#FFB3D9'],
  flow: ['#1E90FF', '#00D4FF', '#00BFFF', '#00FFA3', '#FFD600', '#FF4757', '#93c5fd', '#60a5fa'],
  dark: ['#8B3FBF', '#A855F7', '#00D4FF', '#00FFA3', '#FF8800', '#E63946', '#c084fc', '#e9d5ff'],
  wednesday: ['#A0153E', '#3DA9A5', '#7B3F6D', '#2D7C7B', '#D4A017', '#9966CC', '#B76E79', '#50C878'],
  moonshine: ['#8BA5C1', '#B8D4E8', '#7CB8E8', '#5FBAA7', '#D4AF6A', '#D97777', '#cbd5e1', '#94a3b8'],
  cassette: ['#FF6600', '#FF8C42', '#FFC107', '#4CAF50', '#2196F3', '#D32F2F', '#fb923c', '#fdba74'],
  cetacean: ['#D4AF37', '#FFD700', '#B8860B', '#DAA520', '#C0C0C0', '#CD853F', '#E5E4E2', '#CD7F32'],
  'cargo-explorer': ['#DC143C', '#B91C1C', '#D4AF37', '#FF6B35', '#60A5FA', '#991B1B', '#EF4444', '#FCD34D'],
};
