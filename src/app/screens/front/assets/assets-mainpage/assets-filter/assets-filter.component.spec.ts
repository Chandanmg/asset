import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsFilterComponent } from './assets-filter.component';

describe('AssetsFilterComponent', () => {
  let component: AssetsFilterComponent;
  let fixture: ComponentFixture<AssetsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
