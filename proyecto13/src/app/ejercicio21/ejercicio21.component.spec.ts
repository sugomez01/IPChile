import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio21Component } from './ejercicio21.component';

describe('Ejercicio21Component', () => {
  let component: Ejercicio21Component;
  let fixture: ComponentFixture<Ejercicio21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
