import { Pais } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:Pais;

  constructor(private activateRoute:ActivatedRoute, private paisService:PaisService){   
  }

  ngOnInit(): void {
   
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.buscarPaisPorCodigo(id)),
      tap(console.log)
    )
    .subscribe((pais:Pais) => {
      this.pais = pais;
    });
  }

}
