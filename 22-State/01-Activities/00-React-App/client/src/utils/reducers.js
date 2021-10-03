// Remove all traces of useReducer
import { useReducer } from 'react';
import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from './actions';

// create initialState for the reducer to use
const initialState = {
  books: [],
  currentBook: {}
};

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return {
        ...state,
        books: [...action.books]
      };

    case UPDATE_CURRENT_BOOK:
      return {
        ...state,
        currentBook: { ...action.currentBook }
      };
    default:
      return state;
  }
};

// Export the reducer
export default reducer;
