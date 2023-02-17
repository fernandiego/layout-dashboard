import {Component} from '@angular/core';

@Component({
  selector: 'app-novo-layout-area-de-trabalho',
  templateUrl: './novo-layout-area-de-trabalho.component.html',
  styleUrls: ['./novo-layout-area-de-trabalho.component.scss']
})
export class NovoLayoutAreaDeTrabalhoComponent {

  iconLeftRight = "pi pi-angle-right"
  classeLateral = "lateral-compacto"

  expandeOuComprime() {
    if (this.classeLateral === 'lateral-expandido') {
      this.classeLateral = 'lateral-compacto';
      this.iconLeftRight = "pi pi-angle-right"
    } else {
      this.classeLateral = 'lateral-expandido';
      this.iconLeftRight = "pi pi-angle-left"
    }
  }
}
