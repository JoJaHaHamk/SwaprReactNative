import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Colors, Shadow } from '../constants/values';

const MatchesPage = () => {
  const wanted = { id: 1, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" }
  const owned = { id: 12, smallThumbnail: "http://books.google.com/books/content?id=1J2oDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Matches</Text>
      <View style={styles.card}>
        <Image source={{uri: wanted.smallThumbnail}} />
        <View>
          <View>
            <Image source={require('../assets/img/swap.png')} />
            <Image source={require('../assets/img/cancel.png')} />
          </View>
          <Image source={{uri: owned.smallThumbnail}} />
          <View>
            <View>
              <Text>3.2</Text>
              <Text>km</Text>
            </View>
            <Image source={require('../assets/img/accept.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 40,
    ...Shadow,
  },
});

export default MatchesPage;