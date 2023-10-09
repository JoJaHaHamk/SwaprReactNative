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
      headers,
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return false;
    }
  }

<<<<<<< HEAD
  async updateSwap(swapId: number, state: string) {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    const fullUrl = _api + '/user/' + userId + '/swap/' + swapId;
=======
  async updateSwap(swapId: number, state: string): Promise<boolean> {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');

    let fullUrl = _api + '/user/' + userId + '/swap/' + swapId;
>>>>>>> 360caed8cb2f9585407691c7e202cca097de9700
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': token ?? '',
    });
<<<<<<< HEAD
    const response = await fetch(fullUrl, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ state: state })
    });

    if (response.status === 200) {
      return true;
=======
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
>>>>>>> 360caed8cb2f9585407691c7e202cca097de9700
    } else {
      return false;
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 360caed8cb2f9585407691c7e202cca097de9700
