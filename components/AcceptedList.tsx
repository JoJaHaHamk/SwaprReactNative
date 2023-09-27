import React from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Colors, Shadow } from '../constants/values';

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
        <View style={styles.info}>
          <View style={styles.topInfo}>
            <Image source={require('../assets/img/swap.png')} />
            <View style={styles.distance}>
              <Text style={styles.number}>3.2</Text>
              <Text style={styles.unit}>km</Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CONTACT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CONCLUDE</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 15,
    borderTopColor: Colors.lightGray,
    borderTopWidth: 1,
  },
  acceptedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: Colors.background,
    ...Shadow
  },
  info: {
    flex: 1/3,
    padding: 10,
  },
  topInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: Colors.onPrimary,
  },
  image: {
    borderRadius: 5,
    aspectRatio: 6 / 9,
    flex: 1/3
  },
  distance: {
    alignSelf: 'flex-start',
    marginTop: 5,
    marginRight: 5,
    backgroundColor: Colors.secondary,
    height: 50,
    width: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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

export default AcceptedList;