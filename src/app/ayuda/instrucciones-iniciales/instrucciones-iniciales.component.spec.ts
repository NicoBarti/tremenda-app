import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesInicialesComponent } from './instrucciones-iniciales.component';

describe('InstruccionesInicialesComponent', () => {
  let component: InstruccionesInicialesComponent;
  let fixture: ComponentFixture<InstruccionesInicialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstruccionesInicialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionesInicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
