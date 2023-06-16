import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';

const routes: Routes = [
  {path: 'editar/:id', component: EditarEmpleadoComponent},
  {path:'insertar', component: InsertarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
