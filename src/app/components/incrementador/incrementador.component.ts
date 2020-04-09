import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress',{static: false}) txtProgress: ElementRef;
  
  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porciento: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log(this.leyenda);
    console.log(this.porciento);
  }
  cambiarValor(valor: number) {
    if (this.porciento >= 100 && valor > 0) {
      this.porciento = 100;
      return;
    }
    if (this.porciento <= 0 && valor < 0) {
      this.porciento = 0;

      return;
    }
    this.porciento = this.porciento + valor;
    this.cambioValor.emit(this.porciento);
    this.txtProgress.nativeElement.focus();
  }

  onChanges(evento: number) {

    // let elemHtml: any = document.getElementsByName('porciento')[0];

    if (evento >= 100) {
      this.porciento = 100;
    } else if (evento <= 0) {
      this.porciento = 0;
    } else {
      this.porciento = evento;
    }
    // elemHtml.value = this.porciento;
    this.txtProgress.nativeElement.value = this.porciento;
    this.cambioValor.emit(this.porciento);
  }
}
