import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})

// Exportación del componente Gallery
export class Gallery implements OnInit {

  public lang = inject(TranslationService);

  // Al iniciar scrollea hasta arriba, a (0,0)
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
