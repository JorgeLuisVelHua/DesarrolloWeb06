import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup,FormControl,Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrarme',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './registrarme.html',
  styleUrl: './registrarme.css',
})
export class Registrarme {

  registroForm = new FormGroup({
    tipoDocumento: new FormControl('', Validators.required),
    nroDocumento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    fechaEmision: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get tipoDocumento() { return this.registroForm.get('tipoDocumento'); }
  get nroDocumento() { return this.registroForm.get('nroDocumento'); }
  get fechaEmision() { return this.registroForm.get('fechaEmision'); }
  get correo() { return this.registroForm.get('correo'); }
  get celular() { return this.registroForm.get('celular'); }
  get contrasena() { return this.registroForm.get('contrasena'); }

  mostrarPassword = false;

  registrar() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}
