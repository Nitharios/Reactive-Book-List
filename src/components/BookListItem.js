import React from 'react';

const Book = ({ title }) => {
  return(
    <div className="book">
      <div>Book Title: { title }</div>
    </div>
  )
}

export default Book;