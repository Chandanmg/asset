import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainanceassetComponent } from './maintainanceasset.component';

describe('MaintainanceassetComponent', () => {
  let component: MaintainanceassetComponent;
  let fixture: ComponentFixture<MaintainanceassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainanceassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainanceassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
