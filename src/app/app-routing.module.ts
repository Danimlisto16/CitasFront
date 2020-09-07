import { PanelmedicoComponent } from './Components/panelmedico/panelmedico.component';
import { AuthGuard } from './guards/auth.guard';
import { PanelPacienteComponent } from './Components/panel-paciente/panel-paciente.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: LoginComponent},
  {path: 'panelPaciente', component: PanelPacienteComponent, canActivate:[AuthGuard], data:{permittedRoles:["p"]}  },
  {path: 'panelMedico', component: PanelmedicoComponent, canActivate:[AuthGuard], data:{permittedRoles:["m"]}  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
