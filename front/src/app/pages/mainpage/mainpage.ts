import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // <--- IMPORTANTE


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css'
})


export class Mainpage {}
