import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoServicesService } from 'src/app/services/empleado-services.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PaisServiceService } from 'src/app/services/pais-service.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent {
  constructor(private empleadoSevices:EmpleadoServicesService, private fb:FormBuilder, private router:ActivatedRoute, private rout:Router, private paisService: PaisServiceService){}
  formularioEmpleado:FormGroup;
  idEmpleado:number = this.router.snapshot.params['id'];;
  listaDeEmpleados:Empleado[] = this.empleadoSevices.listarEmpleadosServices();
  empleado:Empleado = this.listaDeEmpleados[this.idEmpleado];
  empleadoEditar:Empleado;
  listaDePaises:string[] = this.paisService.listarPaisesServices();
  
  ngOnInit(){
    this.formularioEmpleado = this.fb.group({
      id: [this.listaDeEmpleados.length],
      nombre: [this.empleado.nombre, [Validators.required]],
      apellido: [this.empleado.apellido, [Validators.required]],
      cargo: [this.empleado.cargo, [Validators.required]],
      pais: [this.empleado.pais, [Validators.required]]
    });
  }

  editarEmpleado(){
    this.empleadoEditar = this.formularioEmpleado.value;
    this.empleadoSevices.editarEmpleadoServices(this.idEmpleado, this.empleadoEditar);
    alert("Empleado editado correctamente!");
    this.rout.navigate(['insertar']);
  }
}
