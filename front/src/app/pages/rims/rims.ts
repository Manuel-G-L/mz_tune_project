import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';


@Component({
  selector: 'app-rims',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './rims.html',
  styleUrl: './rims.css',
})

// Exportación del componente Rims
export class Rims {

  public lang = inject(TranslationService);

  // Al iniciar se va a 0,0 para que inicie arriba del todo
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
