
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionComponent } from './navegacion.component';

describe('NavegacionComponent', () => {
  let component: NavegacionComponent;
  let fixture: ComponentFixture<NavegacionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
