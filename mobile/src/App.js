import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from '../src/routes';
import SwitchHeader from './components/SwitchHeader';

export default function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.title === dark ? 'light-content' : 'dark-content'}
      />
      <SwitchHeader toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}
