import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainancescheduleComponent } from './maintainanceschedule.component';

describe('MaintainancescheduleComponent', () => {
  let component: MaintainancescheduleComponent;
  let fixture: ComponentFixture<MaintainancescheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainancescheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainancescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
