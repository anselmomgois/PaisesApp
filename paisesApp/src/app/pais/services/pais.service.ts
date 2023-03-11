import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v2';

  get getHttpParams() {
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population')
  }

  constructor(private clientHttp:HttpClient) { }

  buscarPais(termino: string):Observable<Pais[]>
  {

    const url =`${this.apiUrl}/name/${termino}`;

    return this.clientHttp.get<Pais[]>(url,{params: this.getHttpParams});
  }

  buscarPaisPorCapital(termino: string):Observable<Pais[]>
  {

    const url =`${this.apiUrl}/capital/${termino}`;

    return this.clientHttp.get<Pais[]>(url,{params: this.getHttpParams});
  }

  buscarPaisPorCodigo(id: string):Observable<Pais>
  {

    const url =`${this.apiUrl}/alpha/${id}`;

    return this.clientHttp.get<Pais>(url);
  }

  buscarPaisPorRegion(region: string):Observable<Pais[]>
  {


    const url =`${this.apiUrl}/regionalbloc/${region}`;

    return this.clientHttp.get<Pais[]>(url,{params: this.getHttpParams});
  }
}
