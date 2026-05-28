import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service'; // Asegúrate de que la ruta sea correcta


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // Importamos lo necesario aquí
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

// Exportación del Componente Register
export class Register {

  public lang = inject(TranslationService);

  // Inyección de servicios necesarios para el formulario, HTTP y navegación
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);

  // Signal para ocultar / mostrar el overlay del check blanco
  mostrarCheck = signal(false);

  // Endpoint del servidor para el registro
  private readonly API_URL = 'http://172.20.10.2:3000/api/register';

  // Aplicación de validaciones al formulario de registro
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  // Método onregister para cuando el usuario envía el formulario de registro
  onRegister() {

    // Validamos si el formulario es válido o no
    if (this.registerForm.valid) {
      this.mostrarCheck.set(true);
      setTimeout(() => {
        this.router.navigate(['/mainpage']);
      }, 2500);
    } else {
      alert("Please fill all fields correctly.");
    }
  }

}
