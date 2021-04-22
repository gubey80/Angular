import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// atributos de la clase
  title = 'Hola soy un objeto interpolado';
  // este atributo se lo vamos a pasar al componente app-hijo
  datos:any = {
    Nombre: "Leonardo",
    Apellido: "Herrera",
    Edad: 19,
    Documento:"32061801"
  }
}
