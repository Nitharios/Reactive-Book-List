import React from 'react';

const BookFilterInput = ({ searchFor }) => {


  return(
    <div className="book-filter">
      <input type="text" placeholder="search" onChange={ searchFor } />
      <button type="reset">Clear</button>
    </div> 
  )
}

export default BookFilterInput;