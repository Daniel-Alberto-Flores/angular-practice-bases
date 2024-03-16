import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-popup-information',
  templateUrl: './popup-information.component.html',
  styleUrl: './popup-information.component.css'
})
export class PopupInformationComponent {

  public title: string ='';
  public message: string = '';

  constructor(
    private _dialog: MatDialog
  ){
  }

  showDialog(title: string, message: string): void{
    this.title = title;
    this.message = message;
    this._dialog.open(PopupInformationComponent);
  }

  closeDialog():void{

  }

}
