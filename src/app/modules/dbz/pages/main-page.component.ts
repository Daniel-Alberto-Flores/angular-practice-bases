import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupInformationComponent } from '../../../shared/components/popups/popup-information/popup-information.component';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class DBZMainPageComponent{

  get characters(): Character[]{
    return [...this._dbzService.characters];
  }

  constructor(
    //public dialog: MatDialog,
    public popupInfo: PopupInformationComponent,
    private _dbzService: DbzService
  ) {
  }

  deleteCharacter(id: string):void{
    this._dbzService.deleteCharacterById(id);
 }

  addCharacter(character: Character):void{
    this._dbzService.addCharacter(character);
  }

  showDialog():void {
    const title: string = "Título del popup";
    const message: string = "Este es un mensaje de prueba.";
    this.popupInfo.showDialog(title,message);
  }

}
