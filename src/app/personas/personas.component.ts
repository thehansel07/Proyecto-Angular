import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class personasComponent {
  ArrayPersonas = [
    { Nombre: 'Juan', Apellido: 'Martinez', Edad: 18 },
    { Nombre: 'Mariela', Apellido: 'Brito', Edad: 22 },
    { Nombre: 'Antonio', Apellido: 'De los Santos', Edad: 33 },
  ];

  constructor(){}
  
  guardar(): void {}
}
