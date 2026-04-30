import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css',
})
export class IniciarSesion {

  private router = inject(Router);

  loginForm = new FormGroup({
    tipoDocumento: new FormControl('DNI', Validators.required),
    nroDocumento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(8)]),
    recordar: new FormControl(false)
  });

  get nroDocumento() { return this.loginForm.get('nroDocumento'); }
  get contrasena() { return this.loginForm.get('contrasena'); }

  ingresar() {
    if (this.loginForm.valid) {
      this.router.navigate(['/portal']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  mostrarPassword = false;
}