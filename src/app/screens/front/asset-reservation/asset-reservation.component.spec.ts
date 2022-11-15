import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetReservationComponent } from './asset-reservation.component';

describe('AssetReservationComponent', () => {
  let component: AssetReservationComponent;
  let fixture: ComponentFixture<AssetReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
