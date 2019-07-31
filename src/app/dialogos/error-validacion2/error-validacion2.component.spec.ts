import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorValidacion2Component } from './error-validacion2.component';

describe('ErrorValidacion2Component', () => {
  let component: ErrorValidacion2Component;
  let fixture: ComponentFixture<ErrorValidacion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorValidacion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorValidacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
