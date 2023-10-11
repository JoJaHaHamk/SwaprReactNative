import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/values';

const GoogleBookList = (props: any) => {

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity 
        activeOpacity={1}
        style={[styles.imageContainer, props.selected == index ? {opacity: 0.5} : {opacity: 1}]} 
        onPress={()=>props.onSelected(index)}>
        <Image 
          source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
          style={styles.image}
          resizeMode='stretch'
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={props.books}
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
  error: {
    color: 'red',
    marginLeft: 30,
    marginTop: 15,
  }
});

export default GoogleBookList;