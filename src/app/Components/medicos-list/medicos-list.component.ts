import { MedicoServiceService } from './../../Services/medico-service.service';
import { listMedico_Result } from '../../Models/listMedico_Result';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.component.html',
  styleUrls: ['./medicos-list.component.css']
})

export class MedicosListComponent implements OnInit {

  medicos : listMedico_Result[];
  constructor(private medics:MedicoServiceService) { }

  ngOnInit(): void {
    console.log();
  }

  list() : void {
    this.medics.list().subscribe(result => {      
      this.medicos = result;
    });
    
    
    
  }

}
