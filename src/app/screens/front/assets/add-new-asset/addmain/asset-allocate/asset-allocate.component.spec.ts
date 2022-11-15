import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAllocateComponent } from './asset-allocate.component';

describe('AssetAllocateComponent', () => {
  let component: AssetAllocateComponent;
  let fixture: ComponentFixture<AssetAllocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAllocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAllocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
