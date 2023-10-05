import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { Colors } from '../constants/values';
import GoogleBooksService from '../modules/services/GoogleBooksService';

const BookList = (props: any) => {
  const googleBooksService = new GoogleBooksService();
  const { books } = props;
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = await Promise.all(books.map((book: any) => googleBooksService.getBookImageByIsbn(book.isbn)));
      setImageUrls(urls);
    };

    fetchImageUrls();
  }, [books]);

  const renderItem = ({item, index}: any) => {
    const imageUrl = imageUrls[index];
    console.log("imageUrl:", imageUrl);

    return (
      <View style={styles.imageContainer}>
          <Image 
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode='stretch'
          />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={books}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={renderItem}
      />
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
    borderTopColor: Colors.lightGray,
    borderTopWidth: 1,
  },
  imageContainer: {
    flex: 1/3,
    margin: 5
  },
  image: {
    borderRadius: 5,
    aspectRatio: 6 / 9
  }
});

export default BookList;