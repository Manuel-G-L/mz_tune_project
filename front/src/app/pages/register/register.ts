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

export class Register {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);

  mostrarCheck = signal(false);
  private readonly API_URL = 'http://172.20.10.2:3000/api/register';

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onRegister() {
    if (this.registerForm.valid) {
      // 1. Activamos el tick rojo inmediatamente
      this.mostrarCheck.set(true);

      // 2. Esperamos el tiempo de la animación y navegamos
      setTimeout(() => {
        this.router.navigate(['/mainpage']);
      }, 2500);
    } else {
      // Si el formulario no es válido, puedes mostrar un aviso rápido
      alert("Please fill all fields correctly.");
    }
  }

}
