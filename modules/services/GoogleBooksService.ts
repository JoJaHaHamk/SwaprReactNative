const _api = 'https://www.googleapis.com/books/v1/volumes';

export default class GoogleBooksService {
  async getBookImageByIsbn(isbn: string) {
    const fullUrl = _api + '?q=isbn:' + isbn;
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
      return data.items[0].volumeInfo.imageLinks.thumbnail;
    } else {
      return false;
    }
  }

  async searchBooks(title: string) {
    const fullUrl = _api + '?q=intitle:"' + title + '""&printType=books&maxResults=24';
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