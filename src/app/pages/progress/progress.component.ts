import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porciento1: number = 20;
  porciento2: number = 50;

  constructor() { }

  ngOnInit() {
  }

  actualizar(evento) {
    this.porciento1 = evento;
  }


}
