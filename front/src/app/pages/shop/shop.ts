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

export class Shop implements OnInit {

  private router = inject(Router);

  public lang = inject(TranslationService);
  public cartService = inject(CartService);

  // Signal local para controlar si el panel del carrito flotante está abierto o cerrado
  isCartOpen = signal<boolean>(false);

  ngOnInit() {
    window.scrollTo(0, 0);
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
  }

  toggleCart() {
    this.isCartOpen.update(value => !value);
  }

  agregarAlCarrito(id: string, name: string, price: number, image: string) {
    this.cartService.addToCart({ id, name, price, image });
  }

  checkout() {
    this.isCartOpen.set(false); // Cierra el desplegable del carrito antes de irte
    this.router.navigate(['/checkout']);
  }
}
