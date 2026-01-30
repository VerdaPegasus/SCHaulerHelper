export type ThemeId =
  | 'stardust'
  | 'lux'
  | 'pulse'
  | 'flow'
  | 'dark'
  | 'wednesday'
  | 'moonshine'
  | 'cassette'
  | 'cetacean'
  | 'cargo-explorer';

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
}

export type DeliveryTab = 'route' | 'cargo';
