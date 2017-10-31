import React, { Component } from 'react';
import { getBooksFromFakeXHR as getBooks } from '../../lib/books.db';
import { addBookToFakeXHR as addBook} from '../../lib/books.db';
import BookList from '../../components/BookListAppTitle';
import NewBookForm from '../NewBookForm'

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      bookList : []
    }
  }

  addBook(book) {
    let newBook = {
      title : book.title,
      author : book.author
    }

    addBook(newBook)
    .then(bookList => {
      this.setState({
        bookList
      })
    })
  }

  componentWillMount() {
    getBooks()
    .then(bookList => {
      this.setState({
        bookList
      }) 
    })
  }

  render() {

    return (
      <div className="App">
        Hello World!

        <NewBookForm
          message="Enter New Book Title Here"
          addBook={ this.addBook.bind(this) }
        />

        <BookList books={this.state.bookList} />
      </div>
    );
  }
}

export default App;
