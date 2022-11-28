import { Subject } from 'rxjs';

export class LibroServices {
  librosSubject = new Subject();
  private libros = ['Libro del senor Juan Bosh', 'libro del Don Bosco'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(0); 
  //Evento super importante a la hora de notificar cuando se este ingresando o eliminando un registro, para refrescar el conjunto de elemeneto existente.

    console.log(this.libros);
  }

  eliminarLibro(libroNombre: string) {
    this.libros = this.libros.filter((x) => x !== libroNombre);
    this.librosSubject.next(0);
  }

  librosStock() {
    return [...this.libros];
  }
}
