import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodykit } from '../models/bodykit.model';

@Injectable({
  providedIn: 'root'
})
export class BodykitsService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://192.168.41.1:3000/api/bodykits';

  listaKits = signal<Bodykit[]>([]);
  filtroNombre = signal<string>('');
  filtroPreparador = signal<string>('');
  filtroMarca = signal<string>('');

  cargarKits(): Observable<Bodykit[]> {
    return this.http.get<Bodykit[]>(this.API_URL);
  }

  // LÓGICA DE FILTRADO REPARADA
  kitsFiltrados = computed(() => {
    const kits = this.listaKits();

    // Normalizamos los filtros: quitamos espacios y pasamos a Mayúsculas
    const nombre = this.filtroNombre().trim().toLowerCase();
    const marca = this.filtroMarca().trim().toUpperCase();
    const prep = this.filtroPreparador().trim().toUpperCase();

    return kits.filter(k => {
      // 1. Verificamos que las propiedades existan para evitar errores de "undefined"
      const kNombre = (k.NOMBRE || '').toLowerCase();
      const kMarca = (k.MARCA_COCHE || '').toUpperCase().trim();
      const kPrep = (k.PREPARADOR || '').toUpperCase().trim();

      // 2. Aplicamos la lógica de coincidencia
      const cumpleNombre = kNombre.includes(nombre);
      const cumpleMarca = marca === '' || kMarca === marca;
      const cumplePrep = prep === '' || kPrep === prep;

      return cumpleNombre && cumpleMarca && cumplePrep;
    });
  });

  // Métodos de actualización (Asegúrate de usarlos en el HTML)
  actualizarNombre(valor: string) {
    this.filtroNombre.set(valor);
  }

  actualizarPreparador(valor: string) {
    this.filtroPreparador.set(valor);
  }

  actualizarMarca(valor: string) {
    this.filtroMarca.set(valor);
  }
}
