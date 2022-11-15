import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuidingComponent } from './buiding.component';

describe('BuidingComponent', () => {
  let component: BuidingComponent;
  let fixture: ComponentFixture<BuidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
