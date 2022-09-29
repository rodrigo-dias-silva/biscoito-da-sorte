import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button({ textoBtn, colorBtn, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.btn, { borderColor: colorBtn }]}
      onPress={onPress}
    >
      <Text style={[styles.textBtn, { color: colorBtn }]}>
        {textoBtn}
      </Text>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    width: 230,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBtn: {
    fontSize: 17,
    fontWeight: 'bold',
  }
})