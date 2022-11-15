import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetselectionComponent } from './assetselection.component';

describe('AssetselectionComponent', () => {
  let component: AssetselectionComponent;
  let fixture: ComponentFixture<AssetselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
