import { Component, inject } from '@angular/core';
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

  private readonly API_URL = 'http://172.20.10.2:3000/api/register';

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onRegister() {
    if (this.registerForm.valid) {
      this.http.post(this.API_URL, this.registerForm.value).subscribe({
        next: () => {
          alert('¡Registro exitoso!');
          this.router.navigate(['/mainpage']);
        },
        error: (err) => alert('Error: ' + (err.error?.message || 'Servidor caído'))
      });
    }
  }
}
