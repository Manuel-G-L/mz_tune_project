import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodykit } from '../models/bodykit.model';


@Injectable({
  providedIn: 'root'
})


// Clase que exporta el servicio para poder inyectarlo en algún componente
export class BodykitsService {

  // Inyeccion de servicios
  private http = inject(HttpClient);
  //private readonly API_URL = 'http://localhost:3000/api/bodykits';
  private readonly API_URL = 'http://172.24.240.1:3000/api/bodykits';

  // Almacenamos la lista original y cada criterio filtrado por separado
  listaKits = signal<Bodykit[]>([]);
  filtroNombre = signal<string>('');
  filtroPreparador = signal<string>('');
  filtroMarca = signal<string>('');

  // Obtiene los datos brutos del servidor
  cargarKits(): Observable<Bodykit[]> {
    return this.http.get<Bodykit[]>(this.API_URL);
  }

  // Motor de filtrado multivariable
  // Se activa cuando alguna de las 4 variables de arriba cambia
  kitsFiltrados = computed(() => {
    const kits = this.listaKits();

    // Normalizamos los filtros: quitamos espacios y pasamos a Mayúsculas
    const nombre = this.filtroNombre().trim().toLowerCase();
    const marca = this.filtroMarca().trim().toUpperCase();
    const prep = this.filtroPreparador().trim().toUpperCase();

    return kits.filter(k => {

      // Verificamos que las propiedades existan para evitar errores de "undefined"
      const kNombre = (k.NOMBRE || '').toLowerCase();
      const kMarca = (k.MARCA_COCHE || '').toUpperCase().trim();
      const kPrep = (k.PREPARADOR || '').toUpperCase().trim();

      // Aplicamos la lógica de coincidencia
      const cumpleNombre = kNombre.includes(nombre);
      const cumpleMarca = marca === '' || kMarca === marca;
      const cumplePrep = prep === '' || kPrep === prep;

      // Devolvemos un kit con los 3 filtros dados
      return cumpleNombre && cumpleMarca && cumplePrep;
    });
  });

  // Métodos de actualización
  // Estos métodos se conectan a los campos input y change del html
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
