import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cita-virtual',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './cita-virtual.html',
  styleUrl: './cita-virtual.css',
})
export class CitaVirtual {

  citaForm = new FormGroup({
    especialidad: new FormControl('', Validators.required),
    medico: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    motivo: new FormControl(''),
    seguro: new FormControl('sis', Validators.required),
  });

  get especialidad() { return this.citaForm.get('especialidad'); }
  get medico() { return this.citaForm.get('medico'); }
  get fecha() { return this.citaForm.get('fecha'); }
  get hora() { return this.citaForm.get('hora'); }

  confirmar() {
    if (this.citaForm.valid) {
      console.log(this.citaForm.value);
    } else {
      this.citaForm.markAllAsTouched();
    }
  }
}