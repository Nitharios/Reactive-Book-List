import React from 'react';
import BookListItem from '../../components/BookListItem';

const BookList = ({ books, searchFor }) => {
  let searchParam = searchFor.toLowerCase();
  
  return(
    <div className="book-list">
      {
        books
        .filter(book => {
          return(
            searchFor === '' ||
            book.title.toLowerCase().indexOf(searchParam) >= 0 ||
            book.author.toLowerCase().indexOf(searchParam) >= 0
          );
        })
        .map((book, idx) => {
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