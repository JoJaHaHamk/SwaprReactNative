import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const BookList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
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
  }
});

export default BookList;