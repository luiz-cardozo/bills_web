import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: {
        primary: string;
        secondary: string;
      };
      red: {
        primary: string;
        secondary: string;
      };
      green: {
        primary: string;
      };
    };
  }
}
