import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#031c34', // Dark Blue - MLB primary color
      200: '#B3003B', // Red - MLB secondary color
      300: '#FFFFFF', // White
    },
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
