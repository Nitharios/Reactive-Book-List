import { LOAD_BOOKS } from '../actions/books';
import { ADD_BOOK } from '../actions/books';

const initialState = [];

const bookList = (state = initialState, action) => {
  console.log('REDUCERS: activates');
  console.log('REDUCERS:', action);
  switch (action.type) {
    case LOAD_BOOKS: 
      console.log('LOADING THE BOOK');
      return [ ...action.books ];
      // return Object.assign({}, state, { bookList : [...action.books] })
    case ADD_BOOK:
      return [ ...state, action.book ];

      // return Object.assign({}, state, { 
      //   bookList : [...state.books, action.book]
      // })
    default: 
      return state;
  }
};

export default bookList;