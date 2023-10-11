import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors, Shadow } from '../constants/values'; 
import GoogleBookList from '../components/GoogleBookList';
import DropDown from '../components/DropDown';
import GoogleBooksService from '../modules/services/GoogleBooksService';
import BooksService from '../modules/services/BooksService';

const AddBookPage = (props: any) => {
  const googleBooksService = new GoogleBooksService();
  const booksService = new BooksService(props.navigation.navigate);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<number>();
  const options = ['I own this book', "I want this book"];
  const [option, setOption] = useState<string>(options[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (search != '') {
        setLoading(true);
        const result = await googleBooksService.searchBooks(search);
        if (result) {
          const filteredBooks = result.filter((book: any) => {
            const hasThumbnail = book.volumeInfo.imageLinks?.thumbnail;
            const hasISBN13 = book.volumeInfo.industryIdentifiers?.some(
              (identifier: any) => identifier.type === "ISBN_13"
            );
            return hasThumbnail && hasISBN13;
          });
          setBooks(filteredBooks);
        }
        setLoading(false);
      } else {
        setBooks([]);
      }
    };
    fetchData();
  }, [search]);

  const addBook = async () => {
    if (selected != undefined) {
      const book: any = books[selected];
      const isbn = book.volumeInfo.industryIdentifiers.find((identifier: any) => identifier.type === "ISBN_13")?.identifier;
      console.log(isbn);
      const title = book.volumeInfo.title;
      const author = book.volumeInfo.authors[0];
      const type = option === options[0] ? "owned" : "requested";
      await booksService.addBook(isbn, title, author, type);
      props.navigation.navigate("Books");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Add Book</Text>
        <TouchableOpacity onPress={()=>props.navigation.goBack()} activeOpacity={1}>
          <Image style={styles.image} source={require('../assets/img/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <View style={styles.options}>
          <View style={styles.search}>
            <TextInput 
              style={styles.input}
              placeholder="Search for a book"
              placeholderTextColor="#B8B8B8"
              onChangeText={text => setSearch(text)}
              value={search}
            />
            <Image style={styles.searchIcon} source={require('../assets/img/search.png')} />
          </View>
        </View>
        { loading ? (
          <ActivityIndicator style={styles.loading} color={Colors.primary} size='large' />
        ) : (
          <GoogleBookList books={books} onSelected={setSelected} selected={selected} />
        )}
        <View style={styles.addOptions}>
          <View style={styles.dropdownContainer}>
            <DropDown options={options} option={option} onOptionChange={setOption} />
          </View>
          <TouchableOpacity onPress={addBook}>
            <Text style={styles.button}>ADD BOOK</Text>
          </TouchableOpacity>
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
  options: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
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
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AddBookPage;