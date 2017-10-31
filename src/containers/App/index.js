import React, { Component } from 'react';
import { getBooksFromFakeXHR as getBooks } from '../../lib/books.db';
import BookList from '../../components/BookListAppTitle';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      bookList : []
    }
  }

  componentWillMount() {
    getBooks()
    .then(bookList => {
      this.setState({
        bookList
      }) 
    })

  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        Hello World!

        <BookList books={this.state.bookList} />
      </div>
    );
  }
}

export default App;
