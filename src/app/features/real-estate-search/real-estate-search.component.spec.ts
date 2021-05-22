import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RealEstateSearchComponent } from './real-estate-search.component';

describe('RealEstateSearchComponent', () => {
  let component: RealEstateSearchComponent;
  let fixture: ComponentFixture<RealEstateSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
