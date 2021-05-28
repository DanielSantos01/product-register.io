import { DefaultTheme } from 'styled-components';

import { COLORS } from './colors';
import { FONTS } from './fonts';

const defaultTheme: DefaultTheme = {
  title: 'default',

  fonts: {
    primary: FONTS.Montserrat,
    secondary: FONTS.RobotoMono,
    terciary: FONTS.Ubuntu,
  },

  colors: {
    light: COLORS.light,
  },
};

export { defaultTheme };
