import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Biscoito from './src/components/Biscoito';
import Frase from './src/components/Frase';
import Button from './src/components/Button';

export default function App() {
  const [textoFrase, setTextoFrase] = useState('');
  const [img, setImg] = useState(require('./assets/biscoito.png'));

  let textos = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'deixe de lado as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'
  ];

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * textos.length)
    setTextoFrase(`" ${textos[numeroAleatorio]} "`);
    setImg(require('./assets/biscoitoAberto.png'));
  }

  function reset() {
    setImg(require('./assets/biscoito.png'));
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Biscoito
        url={img}
      />
      <Frase
        phrase={textoFrase}
      />
      <Button
        textoBtn={'Quebrar Biscoito'}
        colorBtn={'#dd7b22'}
        onPress={quebrarBiscoito}
      />
      <Button
        textoBtn={'Novo biscoito'}
        colorBtn={'#141414'}
        onPress={reset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
