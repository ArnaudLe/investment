import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpruntPageRoutingModule } from './emprunt-page-routing.module';
import { EmpruntPageComponent } from './emprunt-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
    declarations: [
        EmpruntPageComponent
    ],
    imports: [
        CommonModule,
        EmpruntPageRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FlexLayoutModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule
    ]
})
export class EmpruntPageModule { }
