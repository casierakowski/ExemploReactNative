import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import ListaCervejas from './src/componentes/lista-cervejas';

const AppLista = function () {
   return (
      <ListaCervejas />
   );
}

AppRegistry.registerComponent('ExemploReactNative', () => AppLista);