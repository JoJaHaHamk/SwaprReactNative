// AddBook.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import BookList from '../components/BookList';
import DropDown from '../components/DropDown';

const AddBookScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Book</Text>
      <TextInput
        placeholder="Title"
      />
      <BookList />
      <DropDown />
      <Button
        title="Add Book"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default AddBookScreen;