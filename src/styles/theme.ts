import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  Button: {
    baseStyle:
    {
      _focus:
        { boxShadow: 'none' }
    }
  },
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    "sinbus": {
      "50": "##F1F9F7",
      "100": "#CEE9E4",
      "200": "#AEDBD2",
      "300": "#8ECCC1",
      "400": "#6FBEAF",
      "500": "#408F80",
      "600": "#3D887A",
      "700": "#367a6d",
      "800": "#20463F",
      "900": "#102320"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      }
    }
  }
})