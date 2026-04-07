import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-rims',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './rims.html',
  styleUrl: './rims.css',
})

export class Rims {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
