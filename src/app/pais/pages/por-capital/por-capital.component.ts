import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  capital: Country[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino).subscribe((capital) => {
      this.capital = capital
      // this.mostrar = this.paises.length;
    }, (err) => {
      this.hayError = true;
      this.capital = [];
    })
  }

}
