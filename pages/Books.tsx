import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import BookList from '../components/BookList';

const Books = () => {
  return (
    <View style={styles.container}>
      <Text>Books</Text>
      <TextInput placeholder="Search for a book" />
      <View>
          <Text>OWNED BOOKS</Text>
          <Text>WANTED BOOKS</Text>
      </View>
      <BookList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Books;