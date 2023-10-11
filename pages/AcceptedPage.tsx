import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import AcceptedList from '../components/AcceptedList';
import Navigation from '../components/Navigation';
import { Colors, Shadow } from '../constants/values';
import GoogleBooksService from '../modules/services/GoogleBooksService';
import SwapService from '../modules/services/SwapsService';



const AcceptedPage = (props: any) => {
  const googleBookService = new GoogleBooksService();
  const swapService = new SwapService(props.navigation.navigate);
  const [accepted, setAccepted] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSwaps = async () => {
    setIsLoading(true);
    const result = await swapService.getSwaps('accepted');
    if (result) {
      const promises = result.map(async (item: any) => {
        const swap = {
          id: item.swapId,
          smallThumbnail1: await googleBookService.getBookImageByIsbn(item.ownedBookIsbn),
          smallThumbnail2: await googleBookService.getBookImageByIsbn(item.wantedBookIsbn),
          distance: (item.distance / 1000).toFixed(1),
          contactEmail: item.contactEmail,
        };
        return swap;
      });

      const returnArray = await Promise.all(promises);
      setAccepted(returnArray);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSwaps();
  }, []);

  const concludeSwap = async (swapId: number): Promise<void> => {
    const result = await swapService.updateSwap(swapId, "traded");
    if (result) {
      fetchSwaps();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Accepted</Text>
        {/* <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Search for a book" placeholderTextColor="#B8B8B8" />
          <Image style={styles.searchIcon} source={require('../assets/img/search.png')} />
        </View> */}
        {isLoading ? (
          <ActivityIndicator style={styles.loading} color={Colors.primary} size='large' />
        ) : accepted.length == 0 ? (
          <Text style={styles.emptyMessage}>No accepted matches found...</Text>
        ) : (
          <AcceptedList accepted={accepted} concludeAction={concludeSwap} />
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
  },
  options: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
  search: {
    marginTop: -30,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 40,
    ...Shadow,
  },
  searchIcon: {
    marginRight: 16,
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 16,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Roboto-Regular',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AcceptedPage;