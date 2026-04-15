import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-enquire',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './enquire.html',
  styleUrl: './enquire.css',
})
export class Enquire implements OnInit {
  private router = inject(Router);

  // Reutilizamos el signal de register
  mostrarCheck = signal(false);

  ngOnInit() {
    scrollTo(0, 0);
    // Limpieza de posibles residuos de modales
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  }

  onSubmit(event: Event) {
    event.preventDefault();

    // Activamos el overlay del check
    this.mostrarCheck.set(true);

    // Esperamos los 2.5s de la animación (igual que en register)
    setTimeout(() => {
      this.router.navigate(['/mainpage']);
    }, 2500);
  }
}
