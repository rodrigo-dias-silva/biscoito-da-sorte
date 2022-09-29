import { View, StyleSheet, Image } from 'react-native';

export default function Biscoito({ url }) {
  console.log(url);
  return (
    <View style={styles.container}>
      <Image
        source={url}
        style={styles.img}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  img: {
    width: 230,
    height: 230
  }
})