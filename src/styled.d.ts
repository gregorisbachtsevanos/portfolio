import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      black: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
      highlight: {
        1: string;
        2: string;
        3: string;
      };
      white: string;
      success: string;
      error: string;
    };
    sizes: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    maxWidth: string;
    pagePadding: string;
  }
}
