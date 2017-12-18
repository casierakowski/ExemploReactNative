import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

import Titulo from './src/componentes/titulo'; // O .js do nome do arquivo eh suprimido
import ListaCervejas from './src/componentes/lista-cervejas';




const AppLista = function () {
    return (
        <View>
            <Titulo texto={'Lista de Cervejas'} />
            <ListaCervejas />
        </View>
    );
}

AppRegistry.registerComponent('ExemploReactNative', () => AppLista);