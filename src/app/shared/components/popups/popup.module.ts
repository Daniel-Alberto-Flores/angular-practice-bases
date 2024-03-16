import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';

import { PopupInformationComponent } from './popup-information/popup-information.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PopupInformationComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    NgbModule
  ],
  exports: [
    PopupInformationComponent
  ],
  providers: [
    NgbActiveModal
  ],
})
export class PopupModule { }
