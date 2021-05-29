import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    fonts: {
      primary: string;
      secondary: string;
      terciary: string;
    }

    colors: {
      light: string;
      headerPrimary: string;
      headerSecondary: string;
      confirmGreen: string;
      inputGrey: string;
      borderLight: string;
      backgroundErased: string;
      borderGrey: string;
      lighterGreen: string;
      darkerGreen: string;
      discretGrey: string;
      titleGrey: string;
    }
  }
}
