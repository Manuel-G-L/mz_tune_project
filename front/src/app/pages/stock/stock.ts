<<<<<<< HEAD
import { Component, inject, signal } from '@angular/core';
import { CochesService } from '../../services/coches.service';
import { Coche } from '../../models/coche.model';
import { CommonModule } from '@angular/common'; // Importante para el @if
=======
import { Component, inject } from '@angular/core';
import { CochesService } from '../../services/coches.service';
>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc

@Component({
  selector: 'app-stock',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule],
  templateUrl: './stock.html',
  styleUrl: './stock.css'
})

export class StockComponent {
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
=======
  imports: [], // No necesitamos FormsModule si usamos el template reference #t
  templateUrl: './stock.html',
  styleUrl: './stock.css'
})
export class StockComponent {
  // Inyectamos el servicio y lo hacemos 'protected' para usarlo en el HTML
  protected s = inject(CochesService);
>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
}
