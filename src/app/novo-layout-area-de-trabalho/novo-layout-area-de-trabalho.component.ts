import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-layout-area-de-trabalho',
  templateUrl: './novo-layout-area-de-trabalho.component.html',
  styleUrls: ['./novo-layout-area-de-trabalho.component.scss']
})
export class NovoLayoutAreaDeTrabalhoComponent {


  expandeOuComprime(divLateral: HTMLDivElement) {
    if (divLateral.className === 'lateral-expandido') divLateral.className = 'lateral';
    else  divLateral.className = 'lateral-expandido';
  }
}
