import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { EmpruntPageComponent } from './emprunt-page.component';

describe('EmpruntPageComponent', () => {
  let component: EmpruntPageComponent;
  let fixture: ComponentFixture<EmpruntPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpruntPageComponent ],
      imports: [MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FlexLayoutModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpruntPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('ngOnInit', () => {
    expect(component.revenusEnumList).toBeDefined();
    expect(component.revenusFormGroup).toBeDefined();
  });
});
