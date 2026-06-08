import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

// Componente del pie de página que muestra información de contacto y el selector de idiomas.
export class FooterComponent {

  // Inyecta el servicio de traducción para acceder al idioma actual y cambiarlo.
  public lang = inject(TranslationService);

}
