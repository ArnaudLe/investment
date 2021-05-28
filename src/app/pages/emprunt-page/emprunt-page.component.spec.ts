import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpruntPageComponent } from './emprunt-page.component';

describe('EmpruntPageComponent', () => {
  let component: EmpruntPageComponent;
  let fixture: ComponentFixture<EmpruntPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpruntPageComponent ]
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
});
