import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetinsuranceComponent } from './assetdetails.component';

describe('AssetinsuranceComponent', () => {
  let component: AssetinsuranceComponent;
  let fixture: ComponentFixture<AssetinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
