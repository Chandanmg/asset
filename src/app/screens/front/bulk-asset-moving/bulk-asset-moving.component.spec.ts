import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkAssetMovingComponent } from './bulk-asset-moving.component';

describe('BulkAssetMovingComponent', () => {
  let component: BulkAssetMovingComponent;
  let fixture: ComponentFixture<BulkAssetMovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkAssetMovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkAssetMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
