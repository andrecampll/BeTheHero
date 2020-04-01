import React, {useContext} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from 'styled-components';

import {Container} from './styles';

export default function SwitchHeader({toggleTheme}) {
  const {theme} = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onValueChange={() => toggleTheme()}
        value={theme}
        trackColor={{false: '#E02041', true: '#E02041'}}
        thumbColor={theme}
      />
    </Container>
  );
}
