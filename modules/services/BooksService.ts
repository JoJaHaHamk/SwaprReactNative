import AsyncStorage from '@react-native-async-storage/async-storage';
import { _api } from '../../config';

export default class BooksService {
  async getBooks(type: string, search: string) {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    let fullUrl = _api + '/user/' + userId + '/book?type=' + type;
    if (search) {
      fullUrl += '&search=' + search;
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token ?? '',
    });
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return false;
    }
  }

  async addBook(isbn: string, title: string, author: string, type: string) {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    let fullUrl = _api + '/user/' + userId + '/book';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token ?? '',
    });
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ isbn, title, author, type })
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return false;
    }
  }

  async deleteBook(bookId: string) {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    let fullUrl = _api + '/user/' + userId + '/book/' + bookId;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token ?? '',
    });
    const response = await fetch(fullUrl, {
      method: 'DELETE',
      headers
    });

    if (response.status === 200) {
      console.log('Book deleted' + bookId);
      return true;
    } else {
      console.log('Book failed' + bookId);
      return false;
    }
  }
}