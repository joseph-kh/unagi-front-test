import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: '#080808';
      secondary: '#FFFFFF';
      btnPrimary: '#FFFFFF';
      btnSecondary: '#080808';
      btnHoverPrimary: '#E0E0E0';
      btnHoverSecondary: '#303030';
      placeholderText: '#242424';
      disabled: '#acacac';
      white: '#FFFFFF';
      black: '#000000';
      error: '#bf2c24';
    };
  }
}
