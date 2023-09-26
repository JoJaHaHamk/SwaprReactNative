import React from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/values';

const AcceptedList = () => {
  const accepted = [
    { id: 1, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", smallThumbnail2: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 2, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", smallThumbnail2: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 3, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", smallThumbnail2: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
    { id: 4, smallThumbnail: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api", smallThumbnail2: "http://books.google.com/books/content?id=N8iNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" }]

  const renderItem = (item: any) => {
    return (
      <View style={styles.acceptedContainer}>
        <Image 
          source={{uri: item.smallThumbnail}}
          style={styles.image} resizeMode='stretch' />
        <View>
          <View>
            <View>
              <Text>3.2</Text>
              <Text>km</Text>
            </View>
            <Image source={require('../assets/img/swap.png')} />
          </View>
          <TouchableOpacity>
            <Text>CONTACT</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>CONCLUDE</Text>
          </TouchableOpacity>
        </View>
        <Image 
          source={{uri: item.smallThumbnail2}}
          style={styles.image} resizeMode='stretch' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={accepted}
        keyExtractor={(item) => item.id.toString()}
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
    flex: 1,
    paddingLeft: 25,
    paddingEnd: 25,
    paddingTop: 10,
    borderTopColor: Colors.lightGray,
    borderTopWidth: 1,
  },
  acceptedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  image: {
    borderRadius: 5,
    aspectRatio: 6 / 9,
    height: 150,
  }
});

export default AcceptedList;