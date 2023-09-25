import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Colors, Shadow } from '../constants/values'; 
import BookList from '../components/BookList';
import DropDown from '../components/DropDown';

const AddBookScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Book</Text>
      <View style={styles.form}>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Search for a book" placeholderTextColor="#B8B8B8"  />
          <Image style={styles.searchIcon} source={require('../assets/img/search.png')} />
        </View>
        <BookList />
        <DropDown />
        <Button
          title="Add Book"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    padding: 30,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
  },
  form: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.background,
  },
  search: {
    marginTop: 30,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 30,
    ...Shadow,
  },
  searchIcon: {
    marginRight: 16,
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 16,
  },
});

export default AddBookScreen;