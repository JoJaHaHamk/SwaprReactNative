// BookServiceFunctionality.js
import {_api} from '@/config';

const url = _api + '/books';

const token = localStorage.getItem('token');

export default class BookService {
	constructor() {
		this.page = 1;
		this.perPage = 6;
	}

	setPage(page) {
		this.page = page;
		return this;
	}

	setPerPage(perPage) {
		this.perPage = perPage;
		return this;
	}

	async searchBooks(title) {
    try {
        const fullUrl = `https://www.googleapis.com/books/v1/volumes?q={$title}`;
        const response = await fetch(fullUrl, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        });

        return await response.json();
    } catch (error) {
        console.error('Error searching for books:', error);
    }
}


	async addBook(bookData) {
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: token,
				},
				body: JSON.stringify(bookData),
			});

			return await response.json();
		} catch (error) {
			
		}
	}
}


