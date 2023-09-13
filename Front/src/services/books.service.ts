import { Injectable } from '@angular/core';
import { Book } from 'src/models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  private url = 'Book';
  constructor(private http: HttpClient ) { }

  public getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${environment.baseUrl}/${this.url}`);
  }

  public getBook(book: Book):Observable<Book>{
    return this.http.get<Book>(`${environment.baseUrl}/${this.url}/${book.id}`);
  }
  
  public addBook(book: Book):Observable<Book[]>{
    return this.http.post<Book[]>(`${environment.baseUrl}/${this.url}/add-book`,book);
  }

  public updateBook(book: Book):Observable<Book[]>{
    return this.http.put<Book[]>(`${environment.baseUrl}/${this.url}`,book);
  }

  public delateBook(book: Book):Observable<Book[]>{
    return this.http.delete<Book[]>(`${environment.baseUrl}/${this.url}/d/${book.id}`)
  }

}
