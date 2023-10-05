import AsyncStorage from '@react-native-async-storage/async-storage';
import { _api } from '../../config';

export default class AuthService {
  async getUser() {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    const fullUrl = _api + '/user/' + userId;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ?? '',
      }
    });

    if (response.status === 200) {
      return await response.json();
    } else {
      return false;
    }
  }

  async updateUser(username: string, email: string, adress: string, city: string, country: string) {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    
    const fullUrl = _api + '/user' + userId;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ?? '',
      },
      body: JSON.stringify({ username, email, adress, city, country }),
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  }
}