import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruseleqComponent } from './carruseleq.component';

describe('CarruseleqComponent', () => {
  let component: CarruseleqComponent;
  let fixture: ComponentFixture<CarruseleqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruseleqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruseleqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
