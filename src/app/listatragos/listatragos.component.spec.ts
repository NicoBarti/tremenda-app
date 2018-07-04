import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatragosComponent } from './listatragos.component';

describe('ListatragosComponent', () => {
  let component: ListatragosComponent;
  let fixture: ComponentFixture<ListatragosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatragosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatragosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
