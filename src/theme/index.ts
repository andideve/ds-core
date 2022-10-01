import { CoreThemeKey, ThemeKey } from '@andideve/styled-system';

import { config } from './config';
import screens from './screens';
import colors from './colors';
import radii from './radii';
import shadows from './shadows';
import fonts from './fonts';
import fontSizes from './font-sizes';
import fontWeights from './font-weights';
import lineHeights from './line-heights';
import letterSpacings from './letter-spacings';

export const theme = {
  config,
  [CoreThemeKey.screens]: screens,
  [ThemeKey.borders]: {},
  [ThemeKey.borderWidths]: {},
  [ThemeKey.borderStyles]: {},
  [ThemeKey.colors]: colors,
  [ThemeKey.radii]: radii,
  [ThemeKey.space]: {},
  [ThemeKey.sizes]: {},
  [ThemeKey.zIndices]: {},
  [ThemeKey.shadows]: shadows,
  [ThemeKey.fonts]: fonts,
  [ThemeKey.fontSizes]: fontSizes,
  [ThemeKey.fontWeights]: fontWeights,
  [ThemeKey.lineHeights]: lineHeights,
  [ThemeKey.letterSpacings]: letterSpacings,
};

export { lightColors, darkColors } from './colors';

export type Theme = typeof theme;
export type { ThemeConfig } from './config';

export default theme;
