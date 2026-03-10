import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// Declaramos la variable global que viene del archivo JS de assets
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  ngOnInit() {
    // Importante: La ruta empieza con /
    particlesJS.load('particles-js', '/assets/particles.json', function() {
      console.log('Fondo de MZ TUNE cargado...');
    });
}
}
