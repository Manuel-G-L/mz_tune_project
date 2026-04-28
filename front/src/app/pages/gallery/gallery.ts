import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})

// Exportación del componente Gallery
export class Gallery implements OnInit {

  // Al iniciar scrollea hasta arriba, a (0,0)
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
