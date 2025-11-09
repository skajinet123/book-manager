import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from '../../models/model';

export const selectBookState = createFeatureSelector<BookState>('books');

export const selectAllBooks = createSelector(
  selectBookState,
  (state) => state.books
);
