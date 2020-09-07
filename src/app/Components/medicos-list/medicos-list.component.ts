import { ListMedico1ResultService } from './../../Services/list-medico1-result.service';
import { ListMedico1Result } from './../../Models/list-medico1-result';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-medicos-list',
  templateUrl: './medicos-list.component.html',
  styleUrls: ['./medicos-list.component.css']
})
export class MedicosListComponent implements OnInit {

  medi: ListMedico1Result[];
  constructor(private ms :ListMedico1ResultService) { }

  ngOnInit(): void {
    this.list();
  }

  list() : void {
    this.ms.list().subscribe(result => {      
      this.medi = result;
    });
  }

}
