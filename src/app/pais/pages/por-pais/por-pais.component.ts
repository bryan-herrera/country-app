import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  constructor( private PaisService: PaisService) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.PaisService.buscarPais( this.termino)
    .subscribe( (resp) => {
      console.log(resp);
    }, (err) => {
       this.hayError = true;
    });

  }

}
