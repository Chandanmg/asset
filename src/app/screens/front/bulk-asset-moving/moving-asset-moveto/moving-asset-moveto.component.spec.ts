import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingAssetMovetoComponent } from './moving-asset-moveto.component';

describe('MovingAssetMovetoComponent', () => {
  let component: MovingAssetMovetoComponent;
  let fixture: ComponentFixture<MovingAssetMovetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingAssetMovetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingAssetMovetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
