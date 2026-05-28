import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})

// Exportación del componente Shop
export class Shop implements OnInit {

  public lang = inject(TranslationService);

  // Aliniciar se scrolleará hasta 0,0 para empezar arriba automáticamente
  ngOnInit() {
    window.scrollTo(0, 0);
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
  }
}
