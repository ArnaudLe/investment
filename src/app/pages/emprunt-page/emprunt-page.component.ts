import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RevenusEnum } from './RevenusEnum';

@Component({
    selector: 'app-emprunt-page',
    templateUrl: './emprunt-page.component.html',
    styleUrls: ['./emprunt-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmpruntPageComponent implements OnInit {
    revenusFormGroup: FormGroup;
    digitRegex = "^[0-9]*$";
    revenusEnumList: RevenusEnum[];
    revenusEnum = RevenusEnum;
    capacite: number;

    constructor(private formBuilder: FormBuilder) {
    }

    get selectedRevenu(): FormControl {
        return this.revenusFormGroup.get('selectedRevenu') as FormControl;
    }

    get autresRevenus(): FormArray {
        return this.revenusFormGroup.get('autresRevenus') as FormArray;
    }

    ngOnInit(): void {
        this.revenusEnumList = Object.values(RevenusEnum);
        this.revenusFormGroup = this.buildRevenusForm();

        this.revenusFormGroup.get("salaire").valueChanges.subscribe(salaire => {
            this.capacite = (salaire * (1/3)) * 300;
        })
    }

    addAutreRevenu() {
        this.autresRevenus.push(this.createAutreRevenu());
    }

    private buildRevenusForm(): FormGroup {
        return this.formBuilder.group({
            typeEmprunteur: [null, [Validators.required]],
            salaire: [null, [Validators.required, Validators.pattern(this.digitRegex)]],
            autresRevenus: this.formBuilder.array([])
        });
    }

    private createAutreRevenu(): FormGroup {
        return this.formBuilder.group({
            selectedRevenu: [null, []],
            revenuLocatif: [null, [Validators.pattern(this.digitRegex)]],
            prime: [null, [Validators.pattern(this.digitRegex)]],
            autre: [null, [Validators.pattern(this.digitRegex)]]
        });
    }
}


