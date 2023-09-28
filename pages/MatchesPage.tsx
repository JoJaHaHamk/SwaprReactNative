import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Navigation from '../components/Navigation';
import { Colors, Shadow } from '../constants/values';

const MatchesPage = () => {
  const wanted = { id: 1, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" }
  const owned = { id: 12, smallThumbnail: "http://books.google.com/books/content?id=1J2oDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Matches</Text>
        <View style={styles.card}>
          <Image style={styles.wanted} source={{uri: wanted.smallThumbnail}} resizeMode='stretch' />
          <View style={styles.options}>
            <View style={styles.option}>
              <Image style={styles.swap} source={require('../assets/img/swap.png')} />
              <Image style={styles.cancel} source={require('../assets/img/cancel.png')} />
            </View>
            <Image style={styles.owned} source={{uri: owned.smallThumbnail}} resizeMode='stretch' />
            <View style={styles.option}>
              <View style={styles.distance}>
                <Text style={styles.number}>3.2</Text>
                <Text style={styles.unit}>km</Text>
              </View>
              <Image style={styles.accept} source={require('../assets/img/accept.png')} />
            </View>
          </View>
        </View>
      </View>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    padding: 30,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
    paddingBottom: 50
  },
  card: {
    flex: 1,
    marginTop: -30,
    marginBottom: 45,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 40,
    ...Shadow,
  },
  wanted: {
    flex: 1,
    borderRadius: 5,
    margin: 30,
    marginBottom: 15,
    aspectRatio: 6 / 9
  },
  owned: {
    flex: 1/3,
    marginBottom: 25,
    borderRadius: 5,
    aspectRatio: 6 / 9,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flex: 1/3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  swap: {
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  cancel: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 15,
  },
  distance: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    backgroundColor: Colors.secondary,
    height: 50,
    width: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  accept: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginBottom: 15,
  },
  number: {
    fontFamily: 'Roboto-Medium',
    color: Colors.onPrimary,
    fontSize: 16,
  },
  unit: {
    fontFamily: 'Roboto-Medium',
    color: Colors.onPrimary,
    fontSize: 10,
  }
});

export default MatchesPage;