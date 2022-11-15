import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetLeasingComponent } from './asset-leasing.component';

describe('AssetLeasingComponent', () => {
  let component: AssetLeasingComponent;
  let fixture: ComponentFixture<AssetLeasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetLeasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetLeasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
