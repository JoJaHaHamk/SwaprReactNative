const _api = 'https://www.googleapis.com/books/v1/volumes';

export default class BooksService {
  async getBookImageByIsbn(type: string) {

    const fullUrl = _api + '?q=isbn:' + type;
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
      return false;
    }
  }
}