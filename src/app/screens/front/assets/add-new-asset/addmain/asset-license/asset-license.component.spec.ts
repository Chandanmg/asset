import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetLicenseComponent } from './asset-license.component';

describe('AssetLicenseComponent', () => {
  let component: AssetLicenseComponent;
  let fixture: ComponentFixture<AssetLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
