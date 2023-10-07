import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Navigation from '../components/Navigation';
import { Colors, Shadow } from '../constants/values';
import SwapsService from '../modules/services/SwapsService';
import GoogleBooksService from '../modules/services/GoogleBooksService';

interface Matches {
  swapId: number;
  ownedBookIsbn: string;
  wantedBookIsbn: string;
  distance: number;
}

const MatchesPage = (props: any) => {
  const swapsService = new SwapsService();
  const googleBooksService = new GoogleBooksService();
  const [wantedUrl, setWantedUrl] = useState('');
  const [ownedUrl, setOwnedUrl] = useState('');
  const [dinstance, setDistance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      const matches = await swapsService.getSwaps('match');
      setWantedUrl(await googleBooksService.getBookImageByIsbn(matches[0].wantedBookIsbn));
      setOwnedUrl(await googleBooksService.getBookImageByIsbn(matches[0].ownedBookIsbn));
      setDistance(matches[0].distance / 1000);
      setLoading(false);
    }

    fetchMatches();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Matches</Text>
        { !loading && (
          <View style={styles.card}>
            <Image style={styles.owned} source={{uri: ownedUrl}} resizeMode='stretch' />
            <View style={styles.options}>
              <View style={styles.option}>
                <Image style={styles.swap} source={require('../assets/img/swap.png')} />
                <Image style={styles.cancel} source={require('../assets/img/cancel.png')} />
              </View>
              <Image style={styles.wanted} source={{uri: wantedUrl}} resizeMode='stretch' />
              <View style={styles.option}>
                <View style={styles.distance}>
                  <Text style={styles.number}>{dinstance}</Text>
                  <Text style={styles.unit}>km</Text>
                </View>
                <Image style={styles.accept} source={require('../assets/img/accept.png')} />
              </View>
            </View>
          </View>
        )}
      </View>
      <Navigation params={props} />
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
  owned: {
    flex: 1,
    borderRadius: 5,
    margin: 30,
    marginBottom: 15,
    aspectRatio: 6 / 9
  },
  wanted: {
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