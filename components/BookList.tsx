import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors } from '../constants/values';
import GoogleBooksService from '../modules/services/GoogleBooksService';

const BookList = (props: any) => {
  const googleBooksService = new GoogleBooksService();
  const { books } = props;
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      setImageUrls([]);
      const urls = await Promise.all(books.map((book: any) => googleBooksService.getBookImageByIsbn(book.isbn)));
      setImageUrls(urls);
    };
    fetchImageUrls();
  }, [books]);

  const renderItem = ({item, index}: any) => {
    const imageUrl = imageUrls[index];

    return (
      <TouchableOpacity style={styles.imageContainer} onLongPress={()=>props.deleteBook(item.id)}>
        <Image 
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode='stretch'
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
    {imageUrls.length > 0 ? (
      <FlatList
        style={styles.list}
        data={books}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={renderItem}
      />
    ) : (books.length === 0 && !props.loadingBooks)  ? (
      <Text style={styles.emptyMessage}>No books found...</Text>
    ) : (
      <ActivityIndicator style={styles.loading} color={Colors.primary} size='large' />
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingLeft: 25,
    paddingEnd: 25,
    paddingTop: 10,
  },
  imageContainer: {
    flex: 1/3,
    margin: 5
  },
  image: {
    borderRadius: 5,
    aspectRatio: 6 / 9,
    backgroundColor: Colors.lightGray,
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

export default BookList;