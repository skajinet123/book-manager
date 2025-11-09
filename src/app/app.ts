import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import * as BookActions from './store/actions/actions';
import * as BookSelectors from './store/selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class App {
  private store = inject(Store);
  private fb = inject(FormBuilder);

  public books = this.store.selectSignal(BookSelectors.selectAllBooks);

  public bookForm: FormGroup = this.fb.group({
    title: new FormControl('', [nonEmptyStringValidator])
  });;

  addBook(): void {
    if (this.bookForm.valid) {
      const { title } = this.bookForm.value;
      this.store.dispatch(BookActions.addBook({ title }));

      this.bookForm.get('title')?.setValue('')
    }
  }

  toggleReadStatus(id: number): void {
    this.store.dispatch(BookActions.toggleReadStatus({ id }));
  }

  deleteBook(id: number): void {
    this.store.dispatch(BookActions.deleteBook({ id }));
  }
}

export function nonEmptyStringValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  
  if (!value || value.trim().length === 0) {
    return { required: true };
  }
  
  return null;
}