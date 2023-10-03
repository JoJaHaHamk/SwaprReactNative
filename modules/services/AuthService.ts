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
    const data = await response.json();

    if (response.status === 200) {
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('userId', data.userId);
      return true;
    } else {
      return false;
    }
  }

  async register(name: string, email: string, password: string, address: string, city: string, country: string) {
    let fullUrl = _api + '/register';
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  }
}