import React from 'react';

const BookFilterInput = ({ searchFor }) => {


  return(
    <div className="book-filter">
      <input type="text" placeholder="search" onChange={ searchFor } />
      <button type="submit">Clear</button>
    </div> 
  )
}

export default BookFilterInput;