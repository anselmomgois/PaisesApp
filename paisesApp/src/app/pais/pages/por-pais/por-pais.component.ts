import { Pais } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string ='';
  hayError:boolean = false;
  paises:Pais[] = [];
  paisesSugeridos:Pais[]=[]
  mostrarSugerencias: boolean = false;

  constructor(private paisService:PaisService){}
  
  sugerencias(termino:string)
  {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
     .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
     (err) => this.paisesSugeridos = []);
  }

  buscar(termino:string) {
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
     .subscribe((paises) => {
     
      this.paises = paises;
      console.log(this.paises);

     },
     (err) => {
        this.hayError = true;
        this.paises = [];
     });
  }

  buscarSugerido(termino:string)
  {
    this.buscar(termino);   
  }
}
