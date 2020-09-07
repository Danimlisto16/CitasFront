import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private auth: LoginService,private router: Router) 
  {

  }
  canActivate( next: ActivatedRouteSnapshot):boolean{
    if ( this.auth.estaAutenticado() ) {
      let roles = next.data['permittedRoles'] as Array<string>;
      console.log(roles);
      if(roles){
        if(this.auth.roleMatch(roles)){
          return true;
        }
    else{
          // Swal.fire({
          //   icon: 'error',
          //   title: 'Acceso Denegado',
          //   text: "No esta autorizado"
          // });
          console.log("Acceso denegado");
          this.auth.verificarRol();
          //this.verificarRol(roles[0]);
          return false;
        }
      }
  }
  else {
    console.log("esta prohibido");
    this.router.navigateByUrl('/inicio');
    return false;
  }
  }
  
}
