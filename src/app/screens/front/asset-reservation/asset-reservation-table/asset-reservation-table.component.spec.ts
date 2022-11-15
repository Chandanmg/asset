import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetReservationTableComponent } from './asset-reservation-table.component';

describe('AssetReservationTableComponent', () => {
  let component: AssetReservationTableComponent;
  let fixture: ComponentFixture<AssetReservationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetReservationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetReservationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
