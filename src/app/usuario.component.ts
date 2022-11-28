import { Component } from "@angular/core";


@Component({
    selector:'app-usuario', 
    templateUrl:'./usuario.component.html'
})

export class UsuarioComponent{
usuarioNombre = "";
usuarioList = [''];
visible = false; 


constructor(){
    setTimeout( () =>{
        this.visible = true;
    }, 3000);
}


AgregarUsuarioLista( ){
    this.usuarioList.push(this.usuarioNombre);
    this.usuarioNombre = "";
}

}
