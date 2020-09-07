import { ListMedico1Result } from './../Models/list-medico1-result';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { isFunction } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ListMedico1ResultService {
  url : string = "https://localhost:44302/api/medico";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  list(): Observable<ListMedico1Result[]> {
    debugger;
    return this.http.get<ListMedico1Result[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

}
