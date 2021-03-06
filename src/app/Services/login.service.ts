import { login } from './../Models/persona';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url = 'https://localhost:44302/api/Login/Authenticate';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };
  
  userToken: string;
  constructor(private http: HttpClient,private router:Router) { 
    this.leerToken();
  }


  login(usuario: login): Observable<login> {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    //const personaBody = JSON.stringify(p);
    return this.http.post<any>(this.url, authData, this.httpOptions).pipe(
      map( resp => {
        this.guardarToken( resp.token );
        console.log(resp);
        return resp;
        
      })
    );;
  }



leerToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expira');
  }
 
  guardarToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 600 );

    localStorage.setItem('expira', hoy.getTime().toString() );
  }


  estaAutenticado(): boolean {

    if ( this.userToken.length < 2 ) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      this.logout();
      return false;
    }

  }
roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    console.log(payLoad);
    var userRole = payLoad.rol;
    console.log(userRole);
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }


  verificarRol(){
    let rol:string = "";
    var payLoad = JSON.parse(window.atob(localStorage.getItem("token").split('.')[1]));
    rol = payLoad.rol;
    //console.log(rol);
    switch(rol){
      case "p":
        this.router.navigateByUrl('/panelPaciente');
        break;
      case "m":
        this.router.navigateByUrl('/panelMedico');
        break;
      default:
        this.router.navigateByUrl('/inicio');
        break;

    }
  }

  sesionOpen(){
    if(this.estaAutenticado()){
      this.verificarRol();
    }
  }

}
