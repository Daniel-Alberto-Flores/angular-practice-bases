import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="actualizaContador(+1)">+1</button>
    <button (click)="actualizaContador(-1)">-1</button>
    <button (click)="restauraContador()">Reset</button>

    <h3>{{counter}}</h3>
  `
})

export class CounterComponent implements OnInit {

  public counter: number = 0;

  constructor() { }

  ngOnInit() { }

  actualizaContador(value: number):void{
    this.counter += value;
  }

  restauraContador():void{
    this.counter = 0;
  }
}
