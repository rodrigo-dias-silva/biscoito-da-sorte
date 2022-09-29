import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Frase({ phrase }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        {phrase}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})