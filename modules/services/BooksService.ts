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
}