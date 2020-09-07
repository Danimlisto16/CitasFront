import { listMedico_Result } from '../Models/listMedico_Result';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MedicoServiceService {

  url : string = "https://localhost:44302/api/medico";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'   
    })
  };

  constructor(private http:HttpClient) { }
  list(): Observable<listMedico_Result[]> {
    //alert("entro al servicio");
    return this.http.get<listMedico_Result[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }


}
