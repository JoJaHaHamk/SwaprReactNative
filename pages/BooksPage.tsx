import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import BookList from '../components/BookList';
import Navigation from '../components/Navigation';
import { Colors, Shadow } from '../constants/values';
import BookService from '../modules/services/BooksService';

const BooksPage = (props: any) => {
  const bookService = new BookService();
  const [booksData, setBooksData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('owned');
  const [isModalVisible, setModalVisible] = useState(false);
  const [bookToDeleteId, setBookToDeleteId] = useState('');

  const fetchBooksData = async () => {
    setBooksData([]);
    const books = await bookService.getBooks(filter, searchText);
    if (books) {
      setBooksData(books);
    }
  }

  const onLongPressBook = (id: string) => {
    setBookToDeleteId(id);
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  };

  const onDeleteBook = async (id: string) => {
    await bookService.deleteBook(id);
    setBooksData(booksData.filter((book: any) => book.id != id));
  }

  useFocusEffect(
    useCallback(() => {
      fetchBooksData();
    }, [searchText, filter])
  );

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Confirm deletion?</Text>
            <TouchableOpacity
              style={styles.modalDelete}
              onPress={() => {
                onDeleteBook(bookToDeleteId);
                closeModal();
              }}
            >
              <Text style={styles.modalButtonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCancel}
              onPress={closeModal}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
        <BookList books={booksData} deleteBook={onLongPressBook} />
      </View>
      <Navigation params={props} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalDelete: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  modalCancel: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
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