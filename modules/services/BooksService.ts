import AsyncStorage from '@react-native-async-storage/async-storage';
import { _api } from '../../config';

export default class BooksService {
  navigate: any;

  constructor(navigate: any) {
    this.navigate = navigate;
  }

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
      if (response.status === 401) this.navigate('Login');
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
      if (response.status === 401) this.navigate('Login');
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
      return true;
    } else {
      if (response.status === 401) this.navigate('Login');
      return false;
    }
  }
}