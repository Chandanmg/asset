import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCapturedComponent } from './data-captured.component';

describe('DataCapturedComponent', () => {
  let component: DataCapturedComponent;
  let fixture: ComponentFixture<DataCapturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCapturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCapturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
