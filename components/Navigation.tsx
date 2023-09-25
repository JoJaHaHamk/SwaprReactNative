import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/values';

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Image style={[styles.image, styles.active]} source={require('../assets/img/home.png')} />
      <Image style={styles.image} source={require('../assets/img/matches.png')} />
      <View style={styles.plus}>
        <Image source={require('../assets/img/plus.png')} />
      </View>
      <Image style={styles.image} source={require('../assets/img/accepted.png')} />
      <Image style={styles.image} source={require('../assets/img/profile.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 500,
    flex: 1/11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  image: {
    opacity: 0.20,
  },
  plus: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 50,
    marginTop: -65,
  },
  active: {
    opacity: 1,
  }
});

export default Navigation;