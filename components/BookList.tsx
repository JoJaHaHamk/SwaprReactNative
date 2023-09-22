import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Dimensions } from 'react-native';
import { Colors } from '../constants/values';

const BookList = () => {
  const books = [
    { id: 1, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 2, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 3, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 4, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 5, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 6, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 7, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 8, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    
]

  const renderItem = (item: any) => {
    return (
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: item.smallThumbnail}}
          style={styles.image} resizeMode='stretch' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={books}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    borderTopColor: Colors.lightGray,
    borderTopWidth: 1,
    flex: 1,
    paddingLeft: 20,
    paddingEnd: 20,
    paddingTop: 10
  },
  imageContainer: {
    flex: 1/3,
    margin: 5,
  },
  image: {
    borderRadius: 5,
    aspectRatio: 6 / 9,
  }
});

export default BookList;