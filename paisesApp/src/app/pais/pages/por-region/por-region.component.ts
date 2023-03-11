import { PaisService } from './../../services/pais.service';
import { Pais } from './../../interfaces/pais.interface';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {


  regiones: string[] = ['EU',
                        'EFTA', 
                        'CARICOM',
                        'PA',
                        'AU',
                        'USAN', 
                        'EEU', 
                        'AL',
                        'ASEAN',
                        'CAIS',
                        'CEFTA', 
                        'NAFTA',
                        'SAARC']



  regionActiva: string = '';
  hayError:boolean = false;
  @Output() paises: Pais[] = [];
  constructor(private paisService:PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {
    this.regionActiva = region;

    this.paisService.buscarPaisPorRegion(region)
    .subscribe((paises) => {
     
      this.paises = paises;
      console.log(this.paises);
      console.log(this.paises);
     },
     (err) => {
        this.hayError = true;
        this.paises = [];
     });
  }

}
