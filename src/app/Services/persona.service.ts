import { Persona } from './../Models/persona';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { isFunction } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url : string = "https://localhost:44302/api/PERSONA";
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };
  constructor(private http:HttpClient) { }

  list(): Observable<Persona[]> {
    debugger;
    return this.http.get<Persona[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
}
