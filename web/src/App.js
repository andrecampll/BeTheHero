import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light.ts';
import dark from './styles/themes/dark.ts';
import GlobalStyle from './styles/global';

import Routes from './routes';
import HeaderTheme from './components/HeaderTheme/Index';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderTheme toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
