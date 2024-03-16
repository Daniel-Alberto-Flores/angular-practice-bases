import { NgModule } from '@angular/core';

import { PopupInformationComponent } from './components/popup-information/popup-information.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PopupInformationComponent
  ],
  imports: [
    MatDialogModule
  ],
  exports: [
    SharedModule
  ],
  providers: [],
})
export class SharedModule { }
