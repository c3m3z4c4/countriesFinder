// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Country } from '../interfaces/pais.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class CapitalesService {

//   private apiUrl: string = 'https://restcountries.com/v2'

//   constructor( private http: HttpClient) { }

//   buscarPaisPorCapital( termino: string): Observable<Country[]>{
//     const url = `${this.apiUrl}/capital/${termino}`;

//     return this.http.get<Country[]>(url);
//   }
// }
