export interface Book {
  id: number;
  title: string;
  isRead: boolean;
}

export interface BookState {
  books: Book[];
}
