import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodykit } from '../models/bodykit.model';

@Injectable({
  providedIn: 'root'
})
export class BodykitsService {
  // 1. Inyección de dependencias
  private http = inject(HttpClient);

  // 2. URL de tu API (usando tu IP local configurada)
  private readonly API_URL = 'http://192.168.41.1:3000/api/bodykits';

  // 3. State con Signals
  listaKits = signal<Bodykit[]>([]);
  filtroPreparador = signal<string>('');
  filtroMarca = signal<string>('');

  /**
   * Carga los datos desde el Backend
   */
  cargarKits(): Observable<Bodykit[]> {
    return this.http.get<Bodykit[]>(this.API_URL);
  }

  /**
   * Lógica de filtrado combinada (Reactiva)
   * Se dispara automáticamente cuando cambia la lista, el preparador o la marca.
   */
  kitsFiltrados = computed(() => {
    const prep = this.filtroPreparador().toLowerCase();
    const marca = this.filtroMarca().toLowerCase();
    let kits = this.listaKits();

    // Aplicar filtro de Preparador si existe
    if (prep) {
      kits = kits.filter(k => k.PREPARADOR.toLowerCase().includes(prep));
    }

    // Aplicar filtro de Marca si existe
    if (marca) {
      kits = kits.filter(k => k.MARCA_COCHE.toLowerCase().includes(marca));
    }

    return kits;
  });

  /**
   * Métodos auxiliares para actualizar los estados desde los selectores HTML
   */
  actualizarPreparador(valor: string) {
    this.filtroPreparador.set(valor);
  }

  actualizarMarca(valor: string) {
    this.filtroMarca.set(valor);
  }
}
