import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBooks } from '../../actions/books';
// import { getBooksFromFakeXHR as getBooks } from '../../lib/books.db';
// import { addBookToFakeXHR } from '../../lib/books.db';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm';
import BookFilterInput from '../../components/BookFilterInput';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      bookList : [],
      searchFor : ''
    };
  }

  setSearchFor(e) {
    const searchFor = e.target.value;
    this.setState({ searchFor });
  }

  // addBook(book) {
  //   let newBook = {
  //     title : book.title,
  //     author : book.author
  //   };

    // addBook(newBook)
    // .then(bookList => {
    //   this.setState({
    //     bookList
    //   });
    // });
  // }

  componentDidMount() {
    this.props.loadBooks();
    // getBooks()
    // .then(bookList => {
    //   console.log('invoking function loadBooks in props')
    //   this.props.loadBooks(bookList);
    //   // this.setState({
    //   //   bookList
    //   // });
    // });    
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle
          title="Dash" />

        <BookFilterInput
          message="Enter Search"
          searchFor={ this.setSearchFor.bind(this) }
        />

        <BookList 
          books={ this.props.books } 
          searchFor={ this.state.searchFor }
        />

        <NewBookForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books : state.bookList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks : () => {
      console.log('dispatching the action');
      dispatch(loadBooks());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
