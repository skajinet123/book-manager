import { createReducer, on } from '@ngrx/store';
import { Book, BookState } from '../../models/model';
import * as BookActions from '../actions/actions';


export const initialState: BookState = {
  books: [
    {
      id: 1,
      title: 'book1',
      isRead: false,
    },
    {

      id: 2,
      title: 'book2',
      isRead: false,
    },
  ],
};

export const bookReducer = createReducer(
  initialState,
  on(BookActions.addBook, (state, { title }) => {
    const newBook: Book = {
      id: Date.now(),
      title,
      isRead: false
    };
    return {
      ...state,
      books: [...state.books, newBook],
    };
  }),
  on(BookActions.toggleReadStatus, (state, { id }) => ({
    ...state,
    books: state.books.map(book =>
      book.id === id ? { ...book, isRead: !book.isRead } : book
    )
  })),
  on(BookActions.deleteBook, (state, { id }) => ({
    ...state,
    books: state.books.filter(book => book.id !== id)
  }))
);