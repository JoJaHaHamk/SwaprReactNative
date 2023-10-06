import {_api} from '@/config';

const url = _api + '/user'; // Updated endpoint

const token = localStorage.getItem('token');

export default class BookService {

    async addToOwnedList(bookData) {
        try {
            const response = await fetch(`${url}/{userId}/book`, { // Updated endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Updated authorization header
                },
                body: JSON.stringify(bookData), // Pass book data as the request body
            });

            return await response.json();
        } catch (error) {
            // Handle the error here
        }
    }

    async addToWantedList(bookData) {
        try {
            const response = await fetch(`${url}/{userId}/book`, { // Updated endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Updated authorization header
                },
                body: JSON.stringify(bookData), // Pass book data as the request body
            });

            return await response.json();
        } catch (error) {
            // Handle the error here
        }
    }
}
