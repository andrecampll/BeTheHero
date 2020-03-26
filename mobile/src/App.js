import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {StatusBar} from 'react-native';

import Routes from '../src/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#F0F0F5" barStyle="darkcontent" />
      <Routes />
    </>
  );
}
