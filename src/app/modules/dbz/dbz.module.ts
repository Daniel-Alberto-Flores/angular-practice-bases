import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DBZMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { PopupModule } from "../../shared/components/popups/popup.module";

@NgModule({
    declarations: [
        DBZMainPageComponent,
        ListComponent,
        AddCharacterComponent,
    ],
    exports: [
        DBZMainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PopupModule
    ],
})
export class DbzModule { }
