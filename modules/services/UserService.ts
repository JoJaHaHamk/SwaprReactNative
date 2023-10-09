import AsyncStorage from '@react-native-async-storage/async-storage';
import { _api } from '../../config';

export default class UserService {
  async getUser() {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    const fullUrl = _api + '/user/' + userId;
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ?? '',
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return false;
    }
  }

  async updateUser(username: string, email: string, address: string, city: string, country: string) {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    const fullUrl = _api + '/user/' + userId;
    const response = await fetch(fullUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ?? '',
      },
      body: JSON.stringify({ username: username, email: email, address: address, city: city, country: country }),
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  }
}
