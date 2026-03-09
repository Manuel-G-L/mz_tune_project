import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- ESTA LÍNEA ES CLAVE

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // <--- TIENE QUE ESTAR AQUÍ
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
