import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import AcceptedList from '../components/AcceptedList';
import Navigation from '../components/Navigation';
import { Colors, Shadow } from '../constants/values';
import GoogleBooksService from '../modules/services/GoogleBooksService';
import SwapService from '../modules/services/SwapsService';



const AcceptedPage = (props: any) => {
  const googleBookService = new GoogleBooksService();
  const swapService = new SwapService();
  const [accepted, setAccepted] = useState([
    { id: 1, smallThumbnail1: "https://designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg", smallThumbnail2: "http://books.google.com/books/content?id=VvBKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", distance: 5.8 },
    { id: 2, smallThumbnail1: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", smallThumbnail2: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", distance: 3.2 },
    { id: 3, smallThumbnail1: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", smallThumbnail2: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", distance: 3.2 },
    { id: 4, smallThumbnail1: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", smallThumbnail2: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", distance: 3.2 },
    { id: 5, smallThumbnail1: "http://books.google.com/books/content?id=rg3LoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api", smallThumbnail2: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", distance: 3.2 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await swapService.getSwaps('accepted');
      if (result) {
        const promises = result.map(async (item: any, index: number) => {
          const swap = {
            id: index,
            smallThumbnail1: await googleBookService.getBookImageByIsbn(item.ownedBookIsbn),
            smallThumbnail2: await googleBookService.getBookImageByIsbn(item.wantedBookIsbn),
            distance: (item.distance / 1000).toFixed(1),
          };
          return swap;
        });

        const returnArray = await Promise.all(promises);
        setAccepted(returnArray);
      }
    };
    fetchData();
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Accepted</Text>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Search for a book" placeholderTextColor="#B8B8B8" />
          <Image style={styles.searchIcon} source={require('../assets/img/search.png')} />
        </View>
        <AcceptedList accepted={accepted} />
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
});

export default AcceptedPage;