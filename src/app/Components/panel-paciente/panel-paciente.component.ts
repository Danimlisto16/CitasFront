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

  payLoad = JSON.parse(window.atob(localStorage.getItem("token").split('.')[1]));//OBTENGO TODOS LOS DATOS DEL MEDICO
  
  ngOnInit(): void {
    this.js();
    var payLoad = JSON.parse(window.atob(localStorage.getItem("token").split('.')[1]));
    console.log(payLoad.Nombres + payLoad.Apellidos);
  }

  js(){
    $(document).ready(function(){
      
  
  $(document).on('click','.js-menu_toggle.closed',function(e){
    e.preventDefault(); 
    $('.list_load, .list_item').stop();
    $(this).removeClass('closed').addClass('opened');
  
    $('.side_menu').css({ 'left':'0px' });
  
    var count = $('.list_item').length;
    $('.list_load').slideDown( (count*.6)*100 );
    $('.list_item').each(function(i){
      var thisLI = $(this);
      
      setTimeout(function(){
        thisLI.css({
          'opacity':'1',
          'margin-left':'0'
        });
      },100*i);
    });
  });
  
  $(document).on('click','.js-menu_toggle.opened',function(e){
    e.preventDefault(); $('.list_load, .list_item').stop();
    $(this).removeClass('opened').addClass('closed');
  
    $('.side_menu').css({ 'left':'-250px' });
  
    var count = $('.list_item').length;
    $('.list_item').css({
      'opacity':'0',
      'margin-left':'-20px'
    });
    $('.list_load').slideUp(300);
  });    
  });
  
  
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
          this.router.navigate(["/inicio"]);
      }
    });
    

  }

}
