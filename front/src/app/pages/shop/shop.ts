import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})

// Exportación de la clase Shop
export class Shop implements OnInit {

  // Inyección de dependencias para el Router, TranslationService y CartService
  private router = inject(Router);
  public lang = inject(TranslationService);
  public cartService = inject(CartService);

  // Signal local para controlar si el panel del carrito flotante está abierto o cerrado
  isCartOpen = signal<boolean>(false);

  // Al iniciar el componente, se asegura de que la página esté en la parte superior y se restablezcan las clases y estilos relacionados con modales
  ngOnInit() {
    window.scrollTo(0, 0);
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
  }

  // Método para alternar la visibilidad del panel del carrito flotante
  toggleCart() {
    this.isCartOpen.update(value => !value);
  }

  // Método para agregar un producto al carrito utilizando el CartService
  agregarAlCarrito(id: string, name: string, price: number, image: string) {
    this.cartService.addToCart({ id, name, price, image });
  }

  // Método para navegar a la página de checkout y cerrar el panel del carrito flotante
  checkout() {
    this.isCartOpen.set(false);
    this.router.navigate(['/checkout']);
  }
}
