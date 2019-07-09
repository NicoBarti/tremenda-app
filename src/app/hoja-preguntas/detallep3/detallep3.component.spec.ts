import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detallep3Component } from './detallep3.component';

describe('Detallep3Component', () => {
  let component: Detallep3Component;
  let fixture: ComponentFixture<Detallep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detallep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detallep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
