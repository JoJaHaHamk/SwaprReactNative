import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Colors } from '../constants/values';

const BookList = () => {
  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={[{id: '1', title: 'Book 1'}, {id: '2', title: 'Book 2'}]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text>{item.title}</Text>}
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
  }
});

export default BookList;