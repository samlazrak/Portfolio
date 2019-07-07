import { darken, lighten } from 'polished';

const colors = {
  black: '#000',
  white: '#fff',
  charcoal: '#444',
  sunglo: '#b76157',
  fountain_blue: '#57aeb7',
  fern: '#57b761',
  blue_marguerite: '#6157b7',
  olive_green: '#aeb757',
  grey: '#878787',
  gimblet: '#b7a957',
  keppel: '#57b791',
  havelock_blue: '#577eb7',
  romance: '#F1EEE8',
  seashell: '#FEF6F3',
  ivory: '#FFFEF5',
  merino: '#DEDAD3',
  baltic_sea: '#333639',
  black_rock: '#2b2e3c',
  dim_gray: '#6b6b6b',
};
const combinations = {
  complementary: {
    primary: colors.sunglo,
    secondary: colors.fountain_blue,
  },
  triad: {
    primary: colors.sunglo,
    secondary: colors.fern,
    tertiary: colors.blue_marguerite,
  },
  tetrad: {
    primary: colors.sunglo,
    secondary: colors.olive_green,
    tertiary: colors.fountain_blue,
    quaternary: colors.blue_marguerite,
  },
  analogous: {
    primary: colors.sunglo,
    secondary: colors.grey,
    tertiary: colors.gimblet,
  },
  accented: {
    primary: colors.sunglo,
    secondary: colors.grey,
    tertiary: colors.gimblet,
    quaternary: colors.fountain_blue,
  },
  split: {
    primary: colors.sunglo,
    secondary: colors.keppel,
    tertiary: colors.havelock_blue,
  },
};

const brand = {
  colors,
  combinations,
};

const theme = {
  brand,
  bg_color: colors.merino,
  body_color: colors.charcoal,
  link_color: combinations.complementary.primary,
  link_color_hover_darker: `${darken(0.1, combinations.complementary.primary)}`,
  link_color_hover_lighter: `${lighten(
    0.1,
    combinations.complementary.primary,
  )}`,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
};

export default theme;
