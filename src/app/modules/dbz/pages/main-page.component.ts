import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class DBZMainPageComponent{

  public mostrarMsj: boolean = false;

  get characters(): Character[]{
    return [...this._dbzService.characters];
  }

  constructor(
    private _dbzService: DbzService
  ) {
  }

  deleteCharacter(id: string):void{
    this._dbzService.deleteCharacterById(id);
 }

  addCharacter(character: Character):void{
    this._dbzService.addCharacter(character);
  }

  // mostrarMensaje():void{
  //   this._popupService.openPopup();
  // }

}
