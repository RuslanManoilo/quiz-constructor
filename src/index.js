import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    backgroundDark: "#36393f",
    backgroundLight: "#2c2f33",
    border: "#202225",
    textWhite: "#ffffff",
    textGray: "#72767d",
    primary: "#7289da",
    primaryHover: "#677bc4",
    error: "#ff6b6b",
  },

  radii: {
    sm: '4px',
    md: '8px',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);