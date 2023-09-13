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

  public getBooks() : Observable<Book[]>{
    return this.http.get<Book[]>(`${environment.baseUrl}/${this.url}`);
  }
}
