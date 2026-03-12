import { Component, inject, signal, OnInit } from '@angular/core';
import { CochesService } from '../../services/coches.service'; // Ajusta la ruta si es necesario
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
export class Stock implements OnInit {
  // 1. Inyectamos el servicio como 'public' para que el HTML (s.listaCoches) funcione
  public s = inject(CochesService);

  // 2. Signals para el estado de la vista
  selectedCar = signal<Coche | null>(null);
  loading = signal(false);

  // 3. Al iniciar el componente, ejecutamos la carga
  ngOnInit() {
    this.getInventory();
  }

  getInventory() {
    this.loading.set(true);

    // Llamamos al servicio y nos suscribimos
    this.s.cargarCoches().subscribe({
      next: (data) => {
        console.log('DATOS RECIBIDOS:', data);

        // ¡PASO CLAVE!: Rellenamos la signal del servicio
        // Esto hará que el DEBUG pase de 0 al número de coches
        this.s.listaCoches.set(data);

        this.loading.set(false);
      },
      error: (error) => {
        console.error('ERROR AL CARGAR COCHES:', error);
        this.loading.set(false);
      }
    });
  }

  // 4. Lógica de Modales (Tu código original)
  openModal(coche: Coche) {
    this.selectedCar.set(coche);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedCar.set(null);
    document.body.style.overflow = 'auto';
  }
}
