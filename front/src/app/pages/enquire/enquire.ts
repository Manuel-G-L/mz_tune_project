import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquire',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './enquire.html',
  styleUrl: './enquire.css',
})
export class Enquire implements OnInit {

  public lang = inject(TranslationService);
  private router = inject(Router);

  // Signal para controlar la animación de éxito
  mostrarCheck = signal(false);

  ngOnInit() {
    scrollTo(0, 0);
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const serviceID = 'service_y1z0q5n';
    const templateID = 'template_czzhikq';
    const publicKey = '6qBz4RtY3H7Kyo-MI';

    const formElement = event.target as HTMLFormElement;

    emailjs.sendForm(serviceID, templateID, formElement, publicKey)
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('Email enviado con éxito:', result.text);

          // Activamos el overlay del check a través del signal
          this.mostrarCheck.set(true);

          // Esperamos los 2.5s de la animación y redirigimos
          setTimeout(() => {
            this.router.navigate(['/mainpage']);
          }, 2500);
        },
        (error) => {
          console.error('Error crítico al enviar mediante EmailJS:', error);
          alert('Error al procesar la solicitud. Inténtelo de nuevo.');
        }
      );
  }
}
