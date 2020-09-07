import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-panel-paciente',
  templateUrl: './panel-paciente.component.html',
  styleUrls: ['./panel-paciente.component.css']
})
export class PanelPacienteComponent implements OnInit {

  constructor(private auth:LoginService,private router:Router) { }

  ngOnInit(): void {
    
  }


logout(){
    swal.fire({
      title: 'Cerrar Sesión',
      text: '¿Esta seguro que desea cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
          this.auth.logout();
          this.router.navigate(["/login"]);
      }
    });
    

  }

}
