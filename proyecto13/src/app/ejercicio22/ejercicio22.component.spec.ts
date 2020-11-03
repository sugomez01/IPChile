import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio22Component } from './ejercicio22.component';

describe('Ejercicio22Component', () => {
  let component: Ejercicio22Component;
  let fixture: ComponentFixture<Ejercicio22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
