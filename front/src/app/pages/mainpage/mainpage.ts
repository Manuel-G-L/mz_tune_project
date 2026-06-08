import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'; // 1. IMPORTANTE: Comprueba que esté aquí
import { TranslationService } from '../../services/translation.service'; // Asegúrate de que la ruta sea correcta


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css'
})

// Exportamos la clase Mainpage
export class Mainpage implements OnInit {

  // Inyectamos el servicio de traducción para usarlo
  public lang = inject(TranslationService);

  // Al inciar
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
