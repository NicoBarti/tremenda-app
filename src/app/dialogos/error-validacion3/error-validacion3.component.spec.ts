import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorValidacion3Component } from './error-validacion3.component';

describe('ErrorValidacion3Component', () => {
  let component: ErrorValidacion3Component;
  let fixture: ComponentFixture<ErrorValidacion3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorValidacion3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorValidacion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
