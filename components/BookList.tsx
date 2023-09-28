import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
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
    { id: 9, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 10, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 11, smallThumbnail: "http://books.google.com/books/content?id=1J2oDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" },
    { id: 12, smallThumbnail: "http://books.google.com/books/content?id=1J2oDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" },
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