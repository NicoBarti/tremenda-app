import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajoComponent } from './bajo.component';

describe('BajoComponent', () => {
  let component: BajoComponent;
  let fixture: ComponentFixture<BajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
