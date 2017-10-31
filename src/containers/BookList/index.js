import React from 'react';
import BookListItem from '../../components/BookListItem';

const BookList = ({ books }) => {
  return(
    <div className="book-list">
      {
        books.map((book, idx) => {
          return(
            <BookListItem 
              title = { book.title } 
              author = { book.author }
              key = { idx } 
            />
          )
        })
      }
    </div>
  )
}

export default BookList;