import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { ListarEmpleadoComponentComponent } from './components/listar-empleado-component/listar-empleado-component.component';
import { InsertarEmpleadoComponent } from './components/insertar-empleado/insertar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    ListarEmpleadoComponentComponent,
    InsertarEmpleadoComponent,
    EditarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
