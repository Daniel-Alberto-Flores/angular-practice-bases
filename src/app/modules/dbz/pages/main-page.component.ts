import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { PopupInformationComponent } from '../../../shared/components/popups/popup-information/popup-information.component';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class DBZMainPageComponent{

  @Input() title?: string;
  @Input() message?: string;

  get characters(): Character[]{
    return [...this._dbzService.characters];
  }

  constructor(
    //public dialog: MatDialog,
    public popupInfo: PopupInformationComponent,
    private _dbzService: DbzService,
    private _modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {
  }

  deleteCharacter(id: string):void{
    this._dbzService.deleteCharacterById(id);
 }

  addCharacter(character: Character):void{
    this._dbzService.addCharacter(character);
  }

  showDialog() {
    const modalRef = this._modalService.open(PopupInformationComponent);
    modalRef.componentInstance.title = 'Pepito';
    modalRef.componentInstance.message = 'Este es un mensaje de prueba.';
  }
}
