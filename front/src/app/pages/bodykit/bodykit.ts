import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { BodykitsService } from '../../services/bodykits.service';
import { Bodykit } from '../../models/bodykit.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';


// Componente para mostrar los bodykits disponibles
@Component({
  selector: 'app-bodykit',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './bodykit.html',
  styleUrl: './bodykit.css'
})

// Exportación del componente Bodykits
export class Bodykits implements OnInit {

  public lang = inject(TranslationService);

  // Inyectamos el servicio
  public s = inject(BodykitsService);

  // Signals para manejar el estado de los kits y la carga
  selectedKit = signal<any>(null);
  loading = signal(false);

  // En el inicio se inicia desde arriba del todo y se cargan los kits desde la BD
  ngOnInit() {
    window.scrollTo(0, 0);
    this.getKits();
  }


  // ---------------------------------------------------


  // Método para cargar los kits desde la base de datos
  getKits() {
    this.loading.set(true);

    // Llamamos al servicio con subscribe para cargar los kits y actualizamos el estado según la respuesta
    this.s.cargarKits().subscribe({
      next: (data) => {

        // Actualizamos la lista de kits con los datos recibidos y desactivamos el loading
        this.s.listaKits.set(data);
        this.loading.set(false);
      },

      // En caso de error, mostramos un mensaje en la consola
      error: (err) => {
        console.error('Error cargando kits:', err);
        this.loading.set(false);
      }
    });
  }


  // ---------------------------------------------------


  // Métodos para el Modal
  // Método para abrir el modal con la información del kit seleccionado
  openModal(kit: Bodykit) {
    this.selectedKit.set(kit);
    document.body.style.overflow = 'hidden';
  }

  // Método para cerrar el modal y restablecer el estado
  closeModal() {
    this.selectedKit.set(null);
    document.body.style.overflow = 'auto';
  }
}
