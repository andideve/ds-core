import React from 'react';
import { Global } from '@emotion/react';
import CSSReset from '@chakra-ui/css-reset';
import { toCSSVars } from '@andideve/styled-system';

import type { Theme } from '../theme';

const styles = (theme: Theme) => ({
  ':root': {
    colorScheme: theme.config.colorMode,
  },
  '*': {
    WebkitTapHighlightColor: 'transparent',
  },
  body: {
    fontFamily: theme.fonts.sans,
    color: theme.colors.foreground.primary,
    backgroundColor: theme.colors.background.primary,
  },
});

function GlobalStyles({ injectCSSVars }: { injectCSSVars?: boolean }) {
  return (
    <>
      <CSSReset />
      {injectCSSVars && (
        <Global
          styles={(theme) => ({
            ':root': toCSSVars(theme, { prefix: 'ds', omitKeys: ['config'] }),
          })}
        />
      )}
      <Global styles={(theme) => styles(theme as Theme)} />
    </>
  );
}

export default GlobalStyles;
