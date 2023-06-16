import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoServicesService } from 'src/app/services/empleado-services.service';
import { PaisServiceService } from 'src/app/services/pais-service.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-insertar-empleado',
  templateUrl: './insertar-empleado.component.html',
  styleUrls: ['./insertar-empleado.component.css']
})
export class InsertarEmpleadoComponent {
  constructor(private empleadoSevices:EmpleadoServicesService, private fb:FormBuilder, private paisService:PaisServiceService){}
  formularioEmpleado:FormGroup;
  empleado:Empleado;
  listaDeEmpleados:Empleado[] = this.empleadoSevices.listarEmpleadosServices();
  listaDePaises:string[] = this.paisService.listarPaisesServices();

  ngOnInit(){
    this.formularioEmpleado = this.fb.group({
      id: [this.listaDeEmpleados.length],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      pais: ['', [Validators.required]]
    });
  }

  agregarEmpleado(){
    this.empleado = this.formularioEmpleado.value;
    this.empleadoSevices.agregarEmpleadoServices(this.empleado);
    console.log(this.listaDeEmpleados);
  }

  paisSeleccionado(id:number){
    console.log(id)
  }
  
}
