class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  updateDetails(title, author, publicationYear) {
    if (title !== undefined) {
      this.title = title;
    }
    if (author !== undefined) {
      this.author = author;
    }
    if (publicationYear !== undefined) {
      if (Number.isInteger(publicationYear) && publicationYear >= 0) {
        this.publicationYear = publicationYear;
      } else {
        throw new Error('Invalid publication year.');
      }
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
    } else {
      throw new Error('Invalid book object.');
    }
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

// Example
try {
  const book1 = new Book('The Song of Ice and Fire', 'George R.R. Martin', 2009);
  const book2 = new Book('The Intelligent Investor', 'Benjamin Graham', 1959);

  const library = new Library();
  library.addBook(book1);
  library.addBook(book2);

  console.log('Book by Title:', library.searchByTitle('The Intelligent Investor'));
  console.log('Total Books:', library.getTotalBooks());
  console.log('Book by Author:', library.searchByAuthor('George R.R. Martin'));

  book1.updateDetails(undefined, undefined, -100); // Invalid publication year
} catch (error) {
  console.error('An error occurred:', error.message);
}
