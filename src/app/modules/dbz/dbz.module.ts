import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { DBZMainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    DBZMainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    SharedModule
  ],
  exports: [
    DBZMainPageComponent
  ]
})
export class DbzModule { }
