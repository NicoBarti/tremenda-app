import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroreligibilidadComponent } from './erroreligibilidad.component';

describe('ErroreligibilidadComponent', () => {
  let component: ErroreligibilidadComponent;
  let fixture: ComponentFixture<ErroreligibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroreligibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroreligibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
