class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  updateDetails() {
    if (title !== undefined) {
      this.title = title;
    }
    if (author !== undefined) {
      this.author = author;
    }
    if (publicationYear !== undefined) {
      this.publicationYear = publicationYear;
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  searchByTitle(title) {
    return this.books.filter((item) => item.title === title);
  }

  searchByAuthor(author) {
    return this.books.filter((item) => item.author === author);
  }

  getTotalBooks() {
    return this.books.length;
  }
}

//Example
const book1 = new Book('The Song of Ice and Fire', 'George R.R. Martin', 2009);
const book2 = new Book('The Intelligent Investor', 'Benjamin Franklin', 1959);

const library = new Library();
library.addBook(book1);
library.addBook(book2);

console.log('Book by Title', library.searchByTitle('The Intelligent Investor'));
console.log('Total Books', library.getTotalBooks());
console.log('Book by Author', library.searchByAuthor('George R.R. Martin'));
