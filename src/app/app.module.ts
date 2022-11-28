import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsuarioComponent} from './usuario.component';
import{LibrosComponent} from './Libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { FormsModule } from '@angular/forms';
import { PruebaComponent } from './Practic/prueba.component';
import {LibroServices} from './service/libros.service';
import {personasComponent} from './personas/personas.component';
import {InicioComponent} from './inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    PruebaComponent,
    personasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  //Importaciones de los services
  providers: [LibroServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
