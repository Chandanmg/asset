import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetReservationSelectionComponent } from './asset-reservation-selection.component';

describe('AssetReservationSelectionComponent', () => {
  let component: AssetReservationSelectionComponent;
  let fixture: ComponentFixture<AssetReservationSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetReservationSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetReservationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
