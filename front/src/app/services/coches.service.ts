import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable } from 'rxjs';
import { Coche } from '../models/coche.model';

@Injectable({
  providedIn: 'root'
})
export class CochesService {
  // 1. Inyección moderna con inject()
  private http = inject(HttpClient);

  // 2. Tu IP local para que funcione en PC y móvil
  private readonly API_URL = 'http://192.168.41.1:3000/api/coches';

  // 3. State con Signals (para búsqueda y filtrado)
  listaCoches = signal<Coche[]>([]);
  terminoBusqueda = signal<string>('');

  /**
   * MÉTODO CLAVE: Retorna un Observable para que el componente
   * pueda hacer el .subscribe() y manejar el 'loading' o errores.
   */
  cargarCoches(): Observable<Coche[]> {
    return this.http.get<Coche[]>(this.API_URL);
  }

  /**
   * Lógica de filtrado reactiva (Computed)
   * Se actualiza sola cuando cambia la lista o el texto de búsqueda
   */
  cochesFiltrados = computed(() => {
    const filtro = this.terminoBusqueda().toLowerCase();
    const coches = this.listaCoches();

    if (!filtro) return coches;

    return coches.filter(c =>
      c.marca.toLowerCase().includes(filtro) ||
      c.nombre.toLowerCase().includes(filtro)
    );
  });

  // Método auxiliar para actualizar el filtro desde cualquier componente
  actualizarFiltro(texto: string) {
    this.terminoBusqueda.set(texto);
  }
}
