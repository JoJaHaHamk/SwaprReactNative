import AsyncStorage from '@react-native-async-storage/async-storage';
import { _api } from '../../config';

export default class SwapsService {
  navigate: any;

  constructor(navigate: any) {
    this.navigate = navigate;
  }

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
      headers,
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      if (response.status === 401) this.navigate('Login');
      return false;
    }
  }

  async updateSwap(swapId: number, state: string): Promise<boolean> {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    let fullUrl = _api + '/user/' + userId + '/swap/' + swapId;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token ?? '',
    });
    const body = {
      'state': state,
    };
    const response = await fetch(fullUrl, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(body),
    });


    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      if (response.status === 401) this.navigate('Login');
      return false;
    }
  }
}
