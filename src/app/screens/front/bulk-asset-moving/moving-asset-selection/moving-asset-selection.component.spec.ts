import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingAssetSelectionComponent } from './moving-asset-selection.component';

describe('MovingAssetSelectionComponent', () => {
  let component: MovingAssetSelectionComponent;
  let fixture: ComponentFixture<MovingAssetSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingAssetSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingAssetSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
