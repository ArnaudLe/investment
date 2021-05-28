import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RevenusEnum } from './RevenusEnum';

@Component({
    selector: 'app-emprunt-page',
    templateUrl: './emprunt-page.component.html',
    styleUrls: ['./emprunt-page.component.scss']
})
export class EmpruntPageComponent implements OnInit {
    revenusForm: FormGroup;
    digitRegex = "^[0-9]*$";
    revenus: RevenusEnum[];

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.revenus = [RevenusEnum.SALAIRE, RevenusEnum.REVENUS_LOCATIFS];

        this.revenusForm = this.formBuilder.group({
            salaire: [null, [Validators.required, Validators.pattern(this.digitRegex)]]
        })
    }

}


