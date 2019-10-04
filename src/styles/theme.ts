import { theme as baseTheme } from '@chakra-ui/core';

export const theme = {
  ...baseTheme,
  fonts: {
    heading: `Raleway, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Nunito Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
  colors: {
    primary: {
      1: '#CCE1FF',
      2: '#99C4FF',
      3: '#66A6FF',
      4: '#3388FF',
      5: '#006AFF',
      6: '#0055CC',
      7: '#004099',
      8: '#002B66',
      9: '#001533',
    },
    accent: {
      1: '#CCFFF6',
      2: '#99FFEE',
      3: '#66FFE5',
      4: '#33FFDD',
      5: '#00EBC3',
      6: '#00CCAA',
      7: '#00997F',
      8: '#006655',
      9: '#00332A',
    },
    neutral: {
      0: '#FAFAFA',
      1: '#E5E5E5',
      2: '#CCCCCC',
      3: '#B3B3B3',
      4: '#999999',
      5: '#808080',
      6: '#666666',
      7: '#4D4D4D',
      8: '#333333',
      9: '#1A1A1A',
      10: '#050505',
    },
    information: {
      1: '#D6E0F5',
      3: '#85A3E0',
      5: '#3366CC',
      7: '#1F3D7A',
      9: '#0A1429',
    },
    positive: {
      1: '#DAF7D4',
      3: '#69E052',
      5: '#44D926',
      7: '#298217',
      9: '#0E2B08',
    },
    warning: {
      1: '#FFE5CC',
      3: '#FF9933',
      5: '#FF8000',
      7: '#994D00',
      9: '#331A00',
    },
    error: {
      1: '#FFCCCC',
      3: '#FF6666',
      5: '#FF0000',
      7: '#990000',
      9: '#330000',
    },
    white: '#fff',
    transparent: 'transparent',
  },
};
