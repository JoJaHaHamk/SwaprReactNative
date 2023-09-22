import React from 'react';
import { View, StyleSheet, Text, TextInput, Platform } from 'react-native';
import BookList from '../components/BookList';
import { Colors, Shadow } from '../constants/values';

const BooksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Books</Text>
      <TextInput style={styles.search} placeholder="Search for a book" />
      <View style={styles.filterOptions}>
          <Text style={[styles.filterOption, styles.selectedOption, {borderTopLeftRadius: 5, borderBottomLeftRadius: 5}]}>OWNED BOOKS</Text>
          <Text style={[styles.filterOption, {borderTopRightRadius: 5, borderBottomRightRadius: 5}]}>WANTED BOOKS</Text>
      </View>
      <BookList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    padding: 30,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
    paddingBottom: 50,
    marginBottom: 45,
    ...Shadow
  },
  search: {
    position: 'absolute',
    top: 92,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 20,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    height: 60,
    ...Shadow
  },
  filterOptions: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    marginBottom: 15
  },
  filterOption: {
    padding: 10,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: Colors.primary,
    width: '50%',
    textAlign: 'center',
  },
  selectedOption: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
  }
});

export default BooksScreen;