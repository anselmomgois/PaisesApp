import { Pais } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string ='';
  hayError:boolean = false;
  paises:Pais[] = [];

  constructor(private paisService:PaisService){}
  
  sugerencias(termino:string)
  {
    this.hayError = false;
    
  }

  buscar(termino:string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPaisPorCapital(this.termino)
     .subscribe((paises) => {
     
      this.paises = paises;

     },
     (err) => {
        this.hayError = true;
        this.paises = [];
     });
  }
}
