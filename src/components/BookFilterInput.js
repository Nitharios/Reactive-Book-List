import React from 'react';

const BookFilterInput = ({ searchFor }) => {
  return(
    <div className="book-filter">
      <input type="text" placeholder="Search" onChange={ searchFor } />
    </div> 
  )
}

export default BookFilterInput;