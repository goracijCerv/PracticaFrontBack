import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksService } from 'src/services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Front';
  books: Book[] = []

  constructor(private bookService: BooksService) {
    
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
