import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;
  public btnCambiarNombre: boolean = true;
  public btnCambiarEdad:   boolean = true;

  constructor(){
  }

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`;
  }

  cambiarNombre(): void{
    this.name = 'Spiderman';
    this.btnCambiarNombre = false;
  }

  cambiarEdad(): void{
    this.age = 20;
    this.btnCambiarEdad = false;
  }

  reset(): void{
    this.name = 'ironman';
    this.age = 45;
    this.btnCambiarNombre = true;
    this.btnCambiarEdad = true;
  }

}
