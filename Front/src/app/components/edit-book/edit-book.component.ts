import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  @Input() book?: Book
  @Output() bookUpdate = new EventEmitter<Book[]>(); 
  
  constructor(private bookService: BooksService){

  }

  createBook(book: Book){
    this.bookService.addBook(book).subscribe((books:Book[]) => this.bookUpdate.emit(books));
  }

  delateBook(book: Book){
    this.bookService.delateBook(book).subscribe((books:Book[]) =>this.bookUpdate.emit(books));
  }


  updateBook(book: Book){
    this.bookService.updateBook(book).subscribe((books: Book[]) => this.bookUpdate.emit(books));
  }

}
