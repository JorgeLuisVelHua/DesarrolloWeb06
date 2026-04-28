import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCuenta } from './actualizar-cuenta';

describe('ActualizarCuenta', () => {
  let component: ActualizarCuenta;
  let fixture: ComponentFixture<ActualizarCuenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarCuenta],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarCuenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
