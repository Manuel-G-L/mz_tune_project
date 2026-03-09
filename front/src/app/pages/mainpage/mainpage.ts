import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css'
})
export class Mainpage {
}
