import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/model';

export const addBook = createAction(
  '[Book] Add Book',
  props<{ title: string; }>()
);

export const toggleReadStatus = createAction(
  '[Book] Toggle Read Status',
  props<{ id: number }>()
);

export const deleteBook = createAction(
  '[Book] Delete Book',
  props<{ id: number }>()
);