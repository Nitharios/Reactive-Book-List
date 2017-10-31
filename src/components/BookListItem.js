import React from 'react';

const Book = ({ title, author }) => {
  return(
    <div className="book">
      <div>Book Title: { title }</div>
      <div>Author: { author }</div>
    </div>
  )
}

export default Book;