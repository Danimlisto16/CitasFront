import swal from 'sweetalert2';
import { LoginService } from './../../Services/login.service';
import { Persona, login } from './../../Models/persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 

  constructor(private auth: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.auth.sesionOpen();
  }


  login(){
    var usu = (<HTMLInputElement>document.getElementById("usuario")).value;
    var pass = (<HTMLInputElement>document.getElementById("pass")).value;
    console.log(usu);
    console.log(pass);
    const usuario : login = new login();
    usuario.usuario = usu;
    usuario.contrasena = pass;
    this.auth.login( usuario )
      .subscribe( resp => {
        this.auth.verificarRol();
        swal.close();
      }, (err) => {

        console.log(err);
        swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: "Usuario o contraseña incorrecto"
        });
        console.log("Error al autenticar!")
      });
  }

  

}
