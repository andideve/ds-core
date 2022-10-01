const white = 'hsl(0, 0%, 100%)';
const black = 'hsl(0, 0%, 0%)';

export const lightColors = {
  white,
  black,
  red: 'hsl(3, 100%, 59%)',
  orange: 'hsl(35, 100%, 50%)',
  yellow: 'hsl(48, 100%, 50%)',
  green: 'hsl(135, 59%, 49%)',
  teal: 'hsl(199, 94%, 67%)',
  blue: 'hsl(211, 100%, 50%)',
  indigo: 'hsl(241, 61%, 59%)',
  purple: 'hsl(280, 68%, 60%)',
  pink: 'hsl(349, 100%, 59%)',
  gray: {
    1: 'hsl(240, 2%, 57%)',
    2: 'hsl(240, 3%, 69%)',
    3: 'hsl(240, 5%, 79%)',
    4: 'hsl(240, 6%, 83%)',
    5: 'hsl(240, 11%, 91%)',
    6: 'hsl(240, 24%, 96%)',
  },
  accent: 'hsl(211, 100%, 50%)', // blue
  foreground: {
    primary: black,
    secondary: 'hsla(240, 6%, 25%, .6)',
    tertiary: 'hsla(240, 6%, 25%, .3)',
    quaternary: 'hsla(240, 6%, 25%, .18)',
  },
  background: {
    primary: white,
    secondary: 'hsl(240, 24%, 96%)',
    tertiary: white,
    elevated: {
      primary: white,
      secondary: 'hsl(240, 24%, 96%)',
      tertiary: white,
    },
  },
  separator: {
    default: 'hsl(240, 2%, 78%)',
    transparent: 'hsla(240, 6%, 25%, .36)',
  },
  fill: {
    primary: 'hsla(240, 3%, 49%, .2)',
    secondary: 'hsla(240, 3%, 49%, .16)',
    tertiary: 'hsla(240, 4%, 48%, .12)',
    quaternary: 'hsla(240, 5%, 48%, .08)',
  },
};

export const darkColors = {
  white,
  black,
  red: 'hsl(3, 100%, 61%)',
  orange: 'hsl(36, 100%, 52%)',
  yellow: 'hsl(50, 100%, 52%)',
  green: 'hsl(135, 64%, 50%)',
  teal: 'hsl(197, 100%, 70%)',
  blue: 'hsl(210, 100%, 52%)',
  indigo: 'hsl(241, 73%, 63%)',
  purple: 'hsl(280, 85%, 65%)',
  pink: 'hsl(349, 100%, 59%)',
  gray: {
    1: 'hsl(240, 2%, 57%)',
    2: 'hsl(240, 1%, 39%)',
    3: 'hsl(240, 1%, 29%)',
    4: 'hsl(240, 2%, 23%)',
    5: 'hsl(240, 2%, 18%)',
    6: 'hsl(240, 3%, 11%)',
  },
  accent: 'hsl(210, 100%, 52%)', // blue
  foreground: {
    primary: white,
    secondary: 'hsla(240, 33%, 94%, .6)',
    tertiary: 'hsla(240, 33%, 94%, .3)',
    quaternary: 'hsla(240, 33%, 94%, .18)',
  },
  background: {
    primary: black,
    secondary: 'hsl(240, 3%, 11%)',
    tertiary: 'hsl(240, 2%, 18%)',
    elevated: {
      primary: 'hsl(240, 3%, 11%)',
      secondary: 'hsl(240, 2%, 18%)',
      tertiary: 'hsl(240, 2%, 23%)',
    },
  },
  separator: {
    default: 'hsl(240, 2%, 22%)',
    transparent: 'hsla(240, 2%, 34%, .65)',
  },
  fill: {
    primary: 'hsla(240, 3%, 49%, .36)',
    secondary: 'hsla(240, 3%, 49%, .32)',
    tertiary: 'hsla(240, 4%, 48%, .24)',
    quaternary: 'hsla(240, 5%, 48%, .18)',
  },
};

export const colors = lightColors;

export default colors;
