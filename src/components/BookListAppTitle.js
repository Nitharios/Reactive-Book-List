import React from 'react';
import BookListItem from './BookListItem';

const BookList = ({ books }) => {
  return(
    <div className="book-list">
      {
        books.map((book, idx) => {
          return(
            <BookListItem title = { book.title } key = { idx } />
          )
        })
      }
    </div>
  )
}

export default BookList;