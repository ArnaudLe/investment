import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {EmpruntPageComponent} from './emprunt-page.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('EmpruntPageComponent', () => {
  let component: EmpruntPageComponent;
  let fixture: ComponentFixture<EmpruntPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpruntPageComponent],
      imports: [MatInputModule, MatRadioModule, MatSelectModule, ReactiveFormsModule, NoopAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpruntPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('ngOnInit', () => {
    component.ngOnInit();

    expect(component.revenusEnumList).toBeDefined();
    expect(component.revenusFormGroup).toBeDefined();
  });
});
