import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicesService {

  constructor() { }

  listaDeEmpleados:Empleado[] = [
    {nombre: 'Alan', apellido: 'Maldonado', cargo:'Front End Developer', pais: 'Colombia'},
    {nombre: 'Javier', apellido: 'Zuñiga', cargo:'Java Developer', pais: 'Estados Unidos'},
    {nombre: 'Juan', apellido: 'Lozano', cargo:'Phyton Developer', pais: 'Mexico'}
  ];

  empleadoEditado:Empleado;

  listarEmpleadosServices(){
    return this.listaDeEmpleados;
  }

  agregarEmpleadoServices(empleado:Empleado){
    return this.listaDeEmpleados.push(empleado);
  }

  eliminarEmpleadoServices(id:number){
    return this.listaDeEmpleados.splice(id,1)
  }

  editarEmpleadoServices(id:number, empleado:Empleado){
     this.empleadoEditado = this.listaDeEmpleados[id];
     this.empleadoEditado.nombre = empleado.nombre;
     this.empleadoEditado.apellido = empleado.apellido;
     this.empleadoEditado.cargo = empleado.cargo;
     this.empleadoEditado.pais = empleado.pais;
  }
}
