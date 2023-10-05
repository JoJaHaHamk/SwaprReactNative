import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import BookList from '../components/BookList';
import Navigation from '../components/Navigation';
import { Colors, Shadow } from '../constants/values';
import BookService from '../modules/services/BooksService';

const BooksPage = (props: any) => {
  const bookService = new BookService();
  const [booksData, setBooksData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('owned');

  useEffect(() => {
    const fetchBooksData = async () => {
      setBooksData([]);
      const books = await bookService.getBooks(filter, searchText);
      if (books) {
        setBooksData(books);
      }
    }

    fetchBooksData();
  }, [searchText, filter]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Books</Text>
        <View style={styles.search}>
          <TextInput 
            style={styles.input} 
            placeholder="Search for a book" 
            placeholderTextColor="#B8B8B8" 
            value={searchText} 
            onChangeText={(text) => setSearchText(text)}  
          />
          <Image style={styles.searchIcon} source={require('../assets/img/search.png')} />
        </View>
        <View style={styles.filterOptions}>
            <TouchableOpacity style={styles.filterOptionButton} onPress={()=>{setFilter('owned')}}>
              <Text style={[filter == 'owned' ? styles.selectedOption : styles.filterOption, {borderTopLeftRadius: 5, borderBottomLeftRadius: 5}]}>OWNED BOOKS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOptionButton} onPress={()=>{setFilter('requested')}}>
              <Text style={[filter == 'requested' ? styles.selectedOption : styles.filterOption, {borderTopRightRadius: 5, borderBottomRightRadius: 5}]}>WANTED BOOKS</Text>
            </TouchableOpacity>
        </View>
        <BookList books={booksData} />
      </View>
      <Navigation params={props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    padding: 30,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
    paddingBottom: 50
  },
  search: {
    marginTop: -30,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 40,
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
  filterOptions: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    marginBottom: 15,
  },
  filterOptionButton: {
    width: '50%',
  },
  filterOption: {
    padding: 10,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    color: Colors.primary,
  },
  selectedOption: {
    padding: 10,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
  }
});

export default BooksPage;