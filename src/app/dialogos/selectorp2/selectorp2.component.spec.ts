import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectorp2Component } from './selectorp2.component';

describe('Selectorp2Component', () => {
  let component: Selectorp2Component;
  let fixture: ComponentFixture<Selectorp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selectorp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selectorp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
