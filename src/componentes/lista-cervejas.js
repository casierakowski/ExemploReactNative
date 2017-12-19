import React, { Component } from 'react';
import { View, Text, Image, ScrollView, ToastAndroid } from 'react-native';
import Button from './button';
import Produto from './produto';
import Titulo from './titulo';

class ListaCervejas extends Component {

    state = { lista: [{ id: 0, nome: 'Carregando...' }] };
    urlDaApi = 'https://raw.githubusercontent.com/casierakowski/ExemploReactNative/master/dados/dados.json';

    componentWillMount() {
        console.log('ListaCervejas.componentWillMount()');
        this.carregaLista();
    }

    carregaLista() {
        fetch(this.urlDaApi)
            .then(resposta => {
                resposta.json().then(data => {
                    console.log(data);
                    this.setState({ lista: data });
                }).catch(erro => {
                    this.setState(
                        { lista: [{ id: 0, nome: 'Deu erro' }] }
                    );
                })
            });
    }

    remove(cerveja) {
        console.log('Removendo', cerveja);
        let l = this.state.lista.slice(0);
        let i = l.indexOf(cerveja);
        l.splice(i, 1);
        this.setState({ lista: l });
    }

    renderCervejas() {
        
        return this.state.lista.map(
            cerveja =>
                <View  key={cerveja.id}  >
                    <Produto id={cerveja.id} nome={cerveja.nome} estilo={cerveja.estilo} imagemURI={cerveja.imagem} />
                    <Button onPress={() => { this.remove(cerveja); }}>Remover ({cerveja.nome})</Button>
                </View>
        );
    }

    render() {
        console.log('Lista.Render');
        return (
            <ScrollView>
                <Titulo texto={'Lista de Cervejas'} />
                <Button onPress={() => { this.carregaLista() }}>Recarregar</Button>
                {this.renderCervejas()}
                <Button onPress={() => { this.exibeMensagem() }}>Mensagem</Button>
            </ScrollView>
        );
    }

    exibeMensagem() {
        ToastAndroid.showWithGravity(
            'Nasdrovie! Saúde!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    }
}



export default ListaCervejas;