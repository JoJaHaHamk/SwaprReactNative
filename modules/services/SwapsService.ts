import AsyncStorage from '@react-native-async-storage/async-storage';
import { _api } from '../../config';

export default class SwapsService {
  async getSwaps(state: string) {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    let fullUrl = _api + '/user/' + userId + '/swap?state=' + state;
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