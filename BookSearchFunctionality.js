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

	async searchBooks(query, limit = 6) {
		let fullUrl = `${url}/search`;
		fullUrl += `?query=${encodeURIComponent(query)}`;
		fullUrl += `&limit=${limit}`;

		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});

		return await response.json();
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
			// Handle the error here
		}
	}
}


