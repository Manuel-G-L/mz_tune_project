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

export class Mainpage implements OnInit {

  public lang = inject(TranslationService);

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
