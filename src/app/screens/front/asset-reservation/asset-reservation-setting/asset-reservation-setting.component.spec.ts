import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetReservationSettingComponent } from './asset-reservation-setting.component';

describe('AssetReservationSettingComponent', () => {
  let component: AssetReservationSettingComponent;
  let fixture: ComponentFixture<AssetReservationSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetReservationSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetReservationSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
