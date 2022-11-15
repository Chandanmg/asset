import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingAssettableComponent } from './moving-assettable.component';

describe('MovingAssettableComponent', () => {
  let component: MovingAssettableComponent;
  let fixture: ComponentFixture<MovingAssettableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingAssettableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingAssettableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
