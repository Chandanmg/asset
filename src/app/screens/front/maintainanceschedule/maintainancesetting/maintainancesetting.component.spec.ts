import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainancesettingComponent } from './maintainancesetting.component';

describe('MaintainancesettingComponent', () => {
  let component: MaintainancesettingComponent;
  let fixture: ComponentFixture<MaintainancesettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainancesettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainancesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
