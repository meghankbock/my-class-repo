import { reducer } from '../utils/reducers';

import{
    UPDATE_BOOKS,
    UPDATE_CURRENT_BOOK
} from '../utils/actions';

const initialState = {
    books: [],
    currentBook:  {
        _id: 1,
        title: 'Initial State',
        author: 'Author One',
        pages: 123,
        description: 'This book is #1'
    }
};

test('UPDATE_BOOKS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_BOOKS,
        books: [{}, {}]
    });

    expect(newState.books.length).toBe(2);
    expect(initialState.books.length).toBe(0);
});

test('UPDATE_CURRENT_BOOKS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_BOOK,
        currentBook: {
            title: 'New State'
        }
    });

    expect(newState.currentBook.title).toBe('New State');
    expect(initialState.currentBook.title).toBe('Initial State');
});
