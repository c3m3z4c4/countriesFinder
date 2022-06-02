import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {
  termino: string = ''
  hayError: boolean = false;
  mostrarSugerencias: boolean = false
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];


  constructor(private paisService: PaisService) { }

  buscar( termino: string) {

    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(termino)
      .subscribe( (paises) => {;
        this.paises = paises;
        this.termino = ''

      }, (err)=>{
        this.hayError = true
        this.paises = [];
        this.termino = '';
      }
      );
    }

    
  sugerencias( termino: string){
    this.hayError= false;
    this.termino = termino;
    this.mostrarSugerencias= true;
    this.paisService.buscarPais(termino)
    .subscribe(
      (paises) => {this.paisesSugeridos = paises.splice(0,5)},
      (err) => this.paisesSugeridos = []
      )
  }

  buscarSugerido( termino: string){
    this.buscar(termino);
  }
}
