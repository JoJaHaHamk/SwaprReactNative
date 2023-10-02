
import {_api} from '@/config';

const url = _api + '/books';

const token = localStorage.getItem('token');

export default class BookService {
    // ... (existing methods)

    async addToOwnedList(bookId) {
        try {
            const response = await fetch(`${url}/${bookId}/addToOwned`, {
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

    async addToWantedList(bookId) {
        try {
            const response = await fetch(`${url}/${bookId}/addToWanted`, {
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
