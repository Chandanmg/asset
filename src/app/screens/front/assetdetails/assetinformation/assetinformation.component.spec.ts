import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetinformationComponent } from './assetinformation.component';

describe('AssetinformationComponent', () => {
  let component: AssetinformationComponent;
  let fixture: ComponentFixture<AssetinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
