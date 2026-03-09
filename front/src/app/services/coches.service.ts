// src/app/services/coches.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed, inject } from '@angular/core';
import { Coche } from '../models/coche.model';
import { rxResource } from '@angular/core/rxjs-interop'; // La forma más moderna de cargar datos

@Injectable({
  providedIn: 'root'
})
export class CochesService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/coches';

  // State
  listaCoches = signal<Coche[]>([]);
  terminoBusqueda = signal<string>('');

  // Lógica de filtrado reactiva (Computed)
  // Se actualiza automáticamente cuando listaCoches o terminoBusqueda cambian
  cochesFiltrados = computed(() => {
    const filtro = this.terminoBusqueda().toLowerCase();
    return this.listaCoches().filter(c =>
      c.marca.toLowerCase().includes(filtro) ||
      c.nombre.toLowerCase().includes(filtro)
    );
  });

  constructor() {
    this.cargarCoches();
  }

  cargarCoches() {
    this.http.get<Coche[]>(this.apiUrl).subscribe(res => {
      this.listaCoches.set(res);
    });
  }
}
