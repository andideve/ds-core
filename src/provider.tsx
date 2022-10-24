import React, { useMemo } from 'react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeKey } from '@andideve/styled-system';

import GlobalStyles from './styles/global';
import { theme as defaultTheme, lightColors, darkColors, Theme, ThemeConfig } from './theme';

function genTheme(themeConfig?: Partial<ThemeConfig>) {
  const config: ThemeConfig = themeConfig
    ? { ...defaultTheme.config, ...themeConfig }
    : defaultTheme.config;

  const colors = (
    {
      light: lightColors,
      dark: darkColors,
    } as Record<'light' | 'dark', Theme['colors']>
  )[config.colorMode];

  const result = {
    ...defaultTheme,
    config,
    [ThemeKey.colors]: colors,
  } as Theme;

  if (typeof window !== 'undefined') {
    (window as any).__theme = result;
  }

  return result;
}

export function Provider({
  children,
  themeConfig,
  injectCSSVars = true,
}: {
  children?: React.ReactNode;
  themeConfig?: Partial<ThemeConfig>;
  injectCSSVars?: boolean;
}) {
  const theme = useMemo(() => genTheme(themeConfig), [themeConfig]);
  return (
    <CacheProvider value={createCache({ key: 'ds' })}>
      <ThemeProvider theme={theme}>
        <GlobalStyles injectCSSVars={injectCSSVars} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Provider;
