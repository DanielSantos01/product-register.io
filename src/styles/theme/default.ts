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
    confirmGreen: COLORS.confirmGreen,
    headerPrimary: COLORS.headerPrimary,
    headerSecondary: COLORS.headerSecondary,
    inputGrey: COLORS.inputGrey,
    borderLight: COLORS.borderLight,
    backgroundErased: COLORS.backgroundErased,
    borderGrey: COLORS.borderGrey,
    lighterGreen: COLORS.lighterGreen,
    darkerGreen: COLORS.darkerGreen,
    discretGrey: COLORS.discretGrey,
    titleGrey: COLORS.titleGrey,
  },
};

export { defaultTheme };
