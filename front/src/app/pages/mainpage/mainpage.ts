import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // <--- IMPORTANTE


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css'
})

// Exportacion del Componente Mainpage
export class Mainpage {}
