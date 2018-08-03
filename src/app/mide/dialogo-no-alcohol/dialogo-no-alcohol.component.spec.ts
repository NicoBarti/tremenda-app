import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoNoAlcoholComponent } from './dialogo-no-alcohol.component';

describe('DialogoNoAlcoholComponent', () => {
  let component: DialogoNoAlcoholComponent;
  let fixture: ComponentFixture<DialogoNoAlcoholComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoNoAlcoholComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoNoAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
