import React, { Component } from 'react';
import { getBookByIdFromFakeXHR as getBookById } from '../../lib/books.db.js';

class BookView extends Component {
  constructor(props) {
    this.state = {
      book : {}
    }
  }

  componentDidMount() {
    getBookById(parseInt(this.props.match.params.id))
    .then(book => {
      this.setState({
        book : book
      })
    })
  }

  render() {
    console.log(this.state.book);
    
    return(
      <div className="book-view">
        THIS IS A SINGLE BOOK VIEW
        <h2>{ this.state.book.title }</h2>
        <h4>{ this.state.book.author }</h4>
      </div>
    );    
  }
}

export default BookView;