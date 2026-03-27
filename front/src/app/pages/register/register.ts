import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // Importamos lo necesario aquí
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

// Exportación del Componente Register
export class Register {

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
    // Si el formulario es válido, se muestra el check blanco
    if (this.registerForm.valid) {
      this.mostrarCheck.set(true);
      // Esperamos el tiempo de la animación y navegamos a la Mainpage
      setTimeout(() => {
        this.router.navigate(['/mainpage']);
      }, 2500);
    } else {
      // Si el formulario no es válido, puedes mostrar un aviso rápido
      alert("Please fill all fields correctly.");
    }
  }

}
