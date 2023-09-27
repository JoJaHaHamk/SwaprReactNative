import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Colors, Shadow } from '../constants/values'; 
import BookList from '../components/BookList';
import DropDown from '../components/DropDown';

const AddBookScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Add Book</Text>
        <Image style={styles.image} source={require('../assets/img/back.png')} />
      </View>
      <View style={styles.form}>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Search for a book" placeholderTextColor="#B8B8B8"  />
          <Image style={styles.searchIcon} source={require('../assets/img/search.png')} />
        </View>
        <BookList />
        <View style={styles.addOptions}>
          <View style={styles.dropdownContainer}>
            <DropDown />
          </View>
          <Text style={styles.button}>ADD BOOK</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    padding: 30,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
  },
  image: {
    marginRight: 30,
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
  addOptions: {
    flex: 1/6,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: Colors.lightGray,
    borderTopWidth: 1,
  },
  dropdownContainer: {
    flex: 1,
    marginLeft: 30,
  },
  button: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    padding: 16,
    borderRadius: 10,
    marginLeft: 20,
    paddingHorizontal: 32,
    marginRight: 30,
  }
});

export default AddBookScreen;