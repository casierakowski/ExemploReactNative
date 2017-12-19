import React from 'react';
import { Text, View, Image } from 'react-native';

const Produto = (props) => {
    // console.log("(1)Propriedades: ", props);

    //Extraindo a propriedade texto da variavel padrao props
    const { id, nome, imagemURI, estilo } = props;
    const { imagemStyle, estiloTexto, estiloView } = estilos;
    //console.log("imagemURI: ", imagemURI);
    return (
        <View style={estiloView}>
            <Text style={estiloTexto}>{id} - {nome} - {estilo}</Text>
            <Image style={imagemStyle} source={{ uri: imagemURI }} />
        </View>
    )
};

const estilos = {
    estiloView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    estiloTexto: {
        backgroundColor: '#FFFF00',
        fontSize: 16
    },
    imagemStyle: {
        height: 300,
        width: 300
    }
};

export default Produto;