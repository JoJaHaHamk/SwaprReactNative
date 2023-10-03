// BookService.js
import {_api} from '@/config';

const url = _api + '/books';

const token = localStorage.getItem('token');

export default class BookService {
    // ... (existing methods)

    async addToOwnedList(userId) {
        try {
            const response = await fetch(`${url}/user/${userId}/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
            });

            return await response.json();
        } catch (error) {
            // Handle the error here
        }
    }

    async addToWantedList(userId) {
        try {
            const response = await fetch(`${url}/user/${userId}/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
            });

            return await response.json();
        } catch (error) {
            // Handle the error here
        }
    }
}
