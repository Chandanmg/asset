import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmainComponent } from './addmain.component';

describe('AddmainComponent', () => {
  let component: AddmainComponent;
  let fixture: ComponentFixture<AddmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
