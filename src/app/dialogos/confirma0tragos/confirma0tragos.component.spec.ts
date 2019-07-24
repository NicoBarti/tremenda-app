import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirma0tragosComponent } from './confirma0tragos.component';

describe('Confirma0tragosComponent', () => {
  let component: Confirma0tragosComponent;
  let fixture: ComponentFixture<Confirma0tragosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Confirma0tragosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Confirma0tragosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
