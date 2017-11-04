import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ id, title, author }) => {
  return(
    <Link to={`/books/${id}`}>
      <div className="book">
        <div>Book Title: { title }</div>
        <div>Author: { author }</div>
      </div>
    </Link>
  )
}

export default Book;