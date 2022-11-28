import { Component, OnDestroy, OnInit } from '@angular/core';
import { LibroServices } from '../service/libros.service';
import { Subscription } from 'rxjs';

//decorator
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit, OnDestroy{
  librosList = [''];
  constructor(private libroServices: LibroServices) {}
  private libroSubscription: Subscription;

  eliminarLibro(libros: any) {
    this.libroServices.librosStock().filter((x) => x !== libros);
  }

  guardarLibros(f: any) {
    if (f.valid) {
      this.libroServices.agregarLibro(f.value.nombreLibro);
    }
  }
  ngOnInit(): void {
    this.librosList = this.libroServices.librosStock();
    this.libroSubscription = this.libroServices.librosSubject.subscribe(() => {
      this.librosList = this.libroServices.librosStock();
    });
  }
  ngOnDestroy(){
    this.libroSubscription.unsubscribe();
  }
}
