import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBasicComponent } from './asset-basic.component';

describe('AssetBasicComponent', () => {
  let component: AssetBasicComponent;
  let fixture: ComponentFixture<AssetBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
