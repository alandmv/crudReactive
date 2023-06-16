import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoServicesService } from 'src/app/services/empleado-services.service';
import { PaisServiceService } from 'src/app/services/pais-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-empleado-component',
  templateUrl: './listar-empleado-component.component.html',
  styleUrls: ['./listar-empleado-component.component.css']
})
export class ListarEmpleadoComponentComponent {

  constructor(private empleadoService:EmpleadoServicesService, private router:Router, private paisService:PaisServiceService){}
  listaDeEmpleados:Empleado[] = [];
  listaDePaises:string[] = [];
  prueba:number;

  ngOnInit(){
    this.listaDeEmpleados = this.empleadoService.listarEmpleadosServices();
    this.listaDePaises = this.paisService.listarPaisesServices();
  }

  eliminarEmpleado(id:number, empleado:Empleado){
    confirm("Seguro que desea eliminar a " + empleado.nombre + " " + empleado.apellido + "?");
    this.empleadoService.eliminarEmpleadoServices(id);
    this.listaDeEmpleados = this.empleadoService.listarEmpleadosServices();
  }

  editarEmpleado(id: number){
    this.router.navigate(['editar', id]);
  }
}
