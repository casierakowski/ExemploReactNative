import React from 'react';
import { Text, View } from 'react-native';
const Titulo = (props) => {
    const { texto } = props;    
    console.log("Propriedads: ", props);
    const { estiloText, estiloView } = estilos;
    return (
        <View style={estiloView}>
            <Text style={estiloText}>{texto}</Text>
        </View>
    );
};

const estilos = {
    estiloView: {
        backgroundColor: '#3377aa',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    estiloText: {
        fontSize: 20,
        color: "#FFF"
    }
};
export default Titulo;