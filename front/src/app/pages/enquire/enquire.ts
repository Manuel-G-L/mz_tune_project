import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service'; // Asegúrate de que la ruta sea correcta


@Component({
  selector: 'app-enquire',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './enquire.html',
  styleUrl: './enquire.css',
})


// Exportación del componente Enquire
export class Enquire implements OnInit {

  public lang = inject(TranslationService);

  // Inyección del router
  private router = inject(Router);

  // Reutilizamos el signal de register
  mostrarCheck = signal(false);

  // Al iniciar se scrollea hasta arriba, a (0,0)
  ngOnInit() {
    scrollTo(0, 0);
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  }

  // Al enviar el cuestionario
  onSubmit(event: Event) {
    event.preventDefault();

    // Activamos el overlay del check
    this.mostrarCheck.set(true);

    // Esperamos los 2.5s de la animación
    setTimeout(() => {
      this.router.navigate(['/mainpage']);
    }, 2500);
  }
}
