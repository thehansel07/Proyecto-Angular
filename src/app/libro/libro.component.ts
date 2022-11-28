import{Component, Input, EventEmitter, Output} from '@angular/core';
import { LibroServices } from '../service/libros.service';


@Component({
    selector:'app-libro',
    templateUrl:'libro.component.html',
    styleUrls:['libro.component.css'],

})

 export class LibroComponent{
    @Input() tituloLibro:string = "";

    @Output() libroClicked = new EventEmitter();

    constructor(private librosService : LibroServices)
    {}

    onClicked()
    {
        this.librosService.eliminarLibro(this.tituloLibro);
    }
 }