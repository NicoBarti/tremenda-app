import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectragosComponent } from './selectragos.component';

describe('SelectragosComponent', () => {
  let component: SelectragosComponent;
  let fixture: ComponentFixture<SelectragosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectragosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectragosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
