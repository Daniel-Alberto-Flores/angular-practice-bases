import { Component, Injectable, Input, TemplateRef, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-popup-information',
  templateUrl: './popup-information.component.html',
  styleUrl: './popup-information.component.css'
})
export class PopupInformationComponent {

  @Input() public title?: string;
  @Input() public message?: string;

  get activeModal() {
    return this._NgbActiveModal;
  }

  constructor(
    private _NgbActiveModal: NgbActiveModal
  ){
  }

}
