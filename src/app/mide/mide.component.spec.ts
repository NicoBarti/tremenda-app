import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MideComponent } from './mide.component';

describe('MideComponent', () => {
  let component: MideComponent;
  let fixture: ComponentFixture<MideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
