import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssetDailogComponent } from './add-asset-dailog.component';

describe('AddAssetDailogComponent', () => {
  let component: AddAssetDailogComponent;
  let fixture: ComponentFixture<AddAssetDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssetDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssetDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
