export const theme = {
  colors: {
    primaryColor: '#000',
    secondaryColor: '#FF0000',
    white: '#FFFFFF',
    mediumGray: '#707070',
  },
  font: {
    family: {
      default: "'AxiForma Regular', sans-serif",
      secondary: "'MarvelRegular', sans-serif",
    },
    sizes: {
      small: '0.8rem',
      smedium: '1.2rem',
      medium: '1.6rem',
      large: '2.4rem',
      xlarge: '3.0rem',
      xxlarge: '4.8rem',
    },
    types: {
      AxiFormaBold: 'AxiForma Bold',
      AxiFormaLight: 'AxiForma Light',
      AxiFormaMedium: 'AxiForma Medium',
      AxiFormaThin: 'AxiForma Thin',
    },
  },
  media: {
    lteLarge: '(max-width: 1500px)',
    lteMedium: '(max-width: 1024px)',
    lteSmall: '(max-width: 768px)',
  },
  spacings: {
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
  },
} as const;
