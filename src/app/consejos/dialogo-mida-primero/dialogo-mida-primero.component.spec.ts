import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoMidaPrimeroComponent } from './dialogo-mida-primero.component';

describe('DialogoMidaPrimeroComponent', () => {
  let component: DialogoMidaPrimeroComponent;
  let fixture: ComponentFixture<DialogoMidaPrimeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoMidaPrimeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoMidaPrimeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
