import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed, inject } from '@angular/core';
import { Coche } from '../models/coche.model';
import { rxResource } from '@angular/core/rxjs-interop'; // La forma más moderna de cargar datos


@Injectable({
  // Hace el servicio accesible en toda la app sin necesidad de importar
  providedIn: 'root'
})


// Exportamos la clase del servicio para poder inyectarlo en algún componente
export class CochesService {

  // Inyección
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/coches';

  // Signals para almacenar el estado de la lista de coches y el término de búsqueda
  listaCoches = signal<Coche[]>([]);
  terminoBusqueda = signal<string>('');

  // Lógica de filtrado
  // Se actualiza automáticamente cuando listaCoches o terminoBusqueda cambian
  cochesFiltrados = computed(() => {
    const filtro = this.terminoBusqueda().toLowerCase();

    // Si ni hay filtro, devuelve la lista completa, si hay busca los que coincidan
    return this.listaCoches().filter(c =>
      c.marca.toLowerCase().includes(filtro) ||
      c.nombre.toLowerCase().includes(filtro)
    );
  });

  constructor() {
    this.cargarCoches();
  }

  // Obtiene los coches desde el backend y actualiza el signal principal
  cargarCoches() {
    this.http.get<Coche[]>(this.apiUrl).subscribe(res => {
      this.listaCoches.set(res);  // Actualizamos el signal con los datos recibidos
    });
  }
}
