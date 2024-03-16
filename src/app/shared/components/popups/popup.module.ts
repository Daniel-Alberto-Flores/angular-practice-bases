import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';

import { PopupInformationComponent } from './popup-information/popup-information.component';

@NgModule({
  declarations: [
    PopupInformationComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    PopupInformationComponent
  ],
  providers: [],
})
export class PopupModule { }
