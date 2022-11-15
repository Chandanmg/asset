import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomcontentComponent } from './bottomcontent.component';

describe('BottomcontentComponent', () => {
  let component: BottomcontentComponent;
  let fixture: ComponentFixture<BottomcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
