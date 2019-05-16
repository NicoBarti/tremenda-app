import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaPreguntasComponent } from './hoja-preguntas.component';

describe('HojaPreguntasComponent', () => {
  let component: HojaPreguntasComponent;
  let fixture: ComponentFixture<HojaPreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaPreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
