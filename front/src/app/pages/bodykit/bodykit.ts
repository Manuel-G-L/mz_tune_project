import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { BodykitsService } from '../../services/bodykits.service';
import { Bodykit } from '../../models/bodykit.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bodykit',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './bodykit.html',
  styleUrl: './bodykit.css'
})

export class Bodykits implements OnInit {
  // Inyectamos el servicio
  public s = inject(BodykitsService);

  // Estado local para el modal y carga
  selectedKit = signal<any>(null);
  loading = signal(false);

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getKits();
  }

  getKits() {
    this.loading.set(true);
    this.s.cargarKits().subscribe({
      next: (data) => {
        this.s.listaKits.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error cargando kits:', err);
        this.loading.set(false);
      }
    });
  }

  // Métodos para el Modal
  openModal(kit: Bodykit) {
    this.selectedKit.set(kit);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedKit.set(null);
    document.body.style.overflow = 'auto';
  }
}
