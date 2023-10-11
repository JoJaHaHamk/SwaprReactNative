const _api = 'https://www.googleapis.com/books/v1/volumes';
import { _key } from '../../config';

export default class GoogleBooksService {
  async getBookImageByIsbn(isbn: string) {
    let fullUrl = _api + '?q=isbn:' + isbn;
    fullUrl += '&key=' + _key;
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers
    });

    if (response.status === 200) {
      const data = await response.json();
      return data.items[0].volumeInfo.imageLinks.thumbnail;
    } else {
      return 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg';
    }
  }

  async searchBooks(title: string) {
    let fullUrl = _api + '?q=intitle:"' + title + '""&printType=books&maxResults=24';
    fullUrl += '&key=' + _key;
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers
    });

    if (response.status === 200) {
      const data = await response.json();
      return data.items;
    } else {
      return false;
    }
  }
}