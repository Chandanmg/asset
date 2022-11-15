import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationinformationComponent } from './allocationinformation.component';

describe('AllocationinformationComponent', () => {
  let component: AllocationinformationComponent;
  let fixture: ComponentFixture<AllocationinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
