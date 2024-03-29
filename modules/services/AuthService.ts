import AsyncStorage from '@react-native-async-storage/async-storage';
import { _api } from '../../config';

export default class AuthService {
  async login(email: string, password: string) {
    let fullUrl = _api + '/login';
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      const data = await response.json();
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('userId', data.userId.toString());
      return true;
    } else {
      return false;
    }
  }

  async register(username: string, email: string, password: string, address: string, city: string, country: string) {
    let fullUrl = _api + '/register';
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, address, city, country }),
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  }
}