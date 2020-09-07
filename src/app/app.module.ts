import { ListMedico1ResultService } from './Services/list-medico1-result.service';
import { ListMedico1Result } from './Models/list-medico1-result';
import { ServiceInterceptor } from './Services/service.interceptor';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import {WebStorageModule, LocalStorageService} from "angular-localstorage";
import { PanelPacienteComponent } from './Components/panel-paciente/panel-paciente.component';
import { PanelmedicoComponent } from './Components/panelmedico/panelmedico.component';
import { LoginService } from './Services/login.service';
import { PacientesListComponent } from './Components/pacientes-list/pacientes-list.component';
import { CitaMainComponent } from './Components/cita-main/cita-main.component';
import { MedicosListComponent } from './Components/medicos-list/medicos-list.component';
import { FichaPacienteComponent } from './Components/ficha-paciente/ficha-paciente.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelPacienteComponent,
    PanelmedicoComponent,
    PacientesListComponent,
    CitaMainComponent,
  
    MedicosListComponent,
  
    FichaPacienteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    LoginService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    ListMedico1ResultService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
