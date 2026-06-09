import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})

// Componente de Checkout que maneja el proceso de pago, validación de datos y animación de éxito
export class Checkout implements OnInit {
  public lang = inject(TranslationService);
  public cartService = inject(CartService);
  private router = inject(Router);

  // Estructura completa con datos de envío y tarjeta
  paymentData = {
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  };

  isProcessing = false;
  showSuccessCheck = signal(false); // Señal que controla el overlay del Tick Animado

  ngOnInit() {
    window.scrollTo(0, 0);

    // Si intentan entrar con el carrito vacío, redirige a la tienda
    if (this.cartService.items().length === 0) {
      this.router.navigate(['/shop']);
    }
  }

  processPayment() {

    // Validamos que absolutamente todos los campos requeridos estén llenos
    if (
      !this.paymentData.cardName || !this.paymentData.cardNumber ||
      !this.paymentData.expiryDate || !this.paymentData.cvv ||
      !this.paymentData.address || !this.paymentData.city ||
      !this.paymentData.postalCode || !this.paymentData.country
    ) {
      alert(this.lang.get('CHECKOUT_ALERT_ERROR'));
      return;
    }

    this.isProcessing = true;

    // Simulación de pasarela bancaria
    setTimeout(() => {
      this.isProcessing = false;

      // Lanzamos la animación del Tick en pantalla completa
      this.showSuccessCheck.set(true);

      // Vaciamos el carrito de compras a través del servicio
      this.cartService.clearCart();

      // Mantenemos la animación durante 3 segundos antes de enviarlo a Home
      setTimeout(() => {
        this.showSuccessCheck.set(false);
        this.router.navigate(['/mainpage']);
      }, 3000);

    }, 2500);
  }
}
