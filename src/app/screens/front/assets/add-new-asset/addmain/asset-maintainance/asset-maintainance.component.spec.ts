import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMaintainanceComponent } from './asset-maintainance.component';

describe('AssetMaintainanceComponent', () => {
  let component: AssetMaintainanceComponent;
  let fixture: ComponentFixture<AssetMaintainanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMaintainanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
