import { Injectable } from '@angular/core';
import { Book } from 'src/models/book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  public getBooks() : Book[]{
    let bok = new Book();
    bok.id =1;
    bok.title="Los juegos del hambre";
    bok.author="Vegeta 777";
    bok.sales=2000;
    bok.datePublication = new Date("2002-01-28");

    return [bok];
  }
}
