import { Component, inject, signal } from '@angular/core';
import { CochesService } from '../../services/coches.service';
import { Coche } from '../../models/coche.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './stock.html',
  styleUrl: './stock.css'
})


export class Stock {
  protected s = inject(CochesService);

  // Signal
  //  para el coche seleccionado (basada en tu interfaz Coche)
  selectedCar = signal<Coche | null>(null);

  // Abrir Modal con los detalles del coche seleccionado
  openModal(coche: Coche) {
    this.selectedCar.set(coche);
    document.body.style.overflow = 'hidden'; // Evitar scroll al abrir el modal
  }

  // Cerrar Modal
  closeModal() {
    this.selectedCar.set(null);
    document.body.style.overflow = 'auto'; // Restaurar scroll al cerrar el modal
  }
}
