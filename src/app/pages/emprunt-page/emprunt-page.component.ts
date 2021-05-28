import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RevenusEnum } from './RevenusEnum';

@Component({
    selector: 'app-emprunt-page',
    templateUrl: './emprunt-page.component.html',
    styleUrls: ['./emprunt-page.component.scss']
})
export class EmpruntPageComponent implements OnInit {
    revenusFormGroup: FormGroup;
    digitRegex = "^[0-9]*$";
    revenusEnumList: RevenusEnum[];
    revenusEnum = RevenusEnum;

    constructor(private formBuilder: FormBuilder) {
    }

    get selectedRevenu(): FormControl {
        return this.revenusFormGroup.get('selectedRevenu') as FormControl;
    }

    ngOnInit(): void {
        this.revenusEnumList = Object.values(RevenusEnum);
        this.revenusFormGroup = this.buildRevenusForm();
    }

    private buildRevenusForm(): FormGroup {
        return this.formBuilder.group({
            salaire: [null, [Validators.required, Validators.pattern(this.digitRegex)]],
            revenuLocatif: [null, [Validators.pattern(this.digitRegex)]],
            selectedRevenu: [null, []],
            prime: [null, []],
            autre: [null, []]
        });
    }
}


