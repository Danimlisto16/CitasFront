import { PersonaService } from './../../Services/persona.service';
import { Persona } from './../../Models/persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  personas:Persona[];

  constructor(private ps: PersonaService) { }

  ngOnInit(): void {
    this.list();
  }


  list() : void {
    debugger;
    this.ps.list().subscribe(result => {      
      this.personas = result;
    });
  }

  redirect(x){
    
  }

}
