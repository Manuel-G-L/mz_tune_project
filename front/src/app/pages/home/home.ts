import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// Declaración de la librería externa Particles.js alojada en assets
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  /**
   * Al iniciar el componente, cargamos la configuración de las partículas
   * sobre el contenedor con ID 'particles-js'.
   */
  ngOnInit() {
    // El archivo JSON define el comportamiento (velocidad, color, cantidad)
    particlesJS.load('particles-js', '/assets/particles.json', function() {
      console.log('Fondo de MZ TUNE cargado...');
    });
  }
}
