import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

// Exportar la clase CartService para ser utilizada en toda la aplicación
export class CartService {

  // Estado del carrito usando Signals para máxima reactividad nativa
  private cartItemsSignal = signal<CartItem[]>(this.loadCartFromStorage());

  // Selectores expuestos (Read-only) para los componentes
  items = this.cartItemsSignal.asReadonly();

  // Selectores computados automáticos
  totalItems = computed(() => this.cartItemsSignal().reduce((acc, item) => acc + item.quantity, 0));
  totalPrice = computed(() => this.cartItemsSignal().reduce((acc, item) => acc + (item.price * item.quantity), 0));

  // Cargar el carrito desde localStorage al inicializar el servicio
  private loadCartFromStorage(): CartItem[] {
    const saved = localStorage.getItem('mztune_cart');
    return saved ? JSON.parse(saved) : [];
  }

  // Guardar el estado del carrito en localStorage cada vez que se actualiza
  private saveToStorage(items: CartItem[]) {
    localStorage.setItem('mztune_cart', JSON.stringify(items));
  }

  // Método para Añadir al carrito
  addToCart(product: Omit<CartItem, 'quantity'>) {
    const currentItems = this.cartItemsSignal();
    const existingItem = currentItems.find(item => item.id === product.id);

    let updatedItems: CartItem[];

    if (existingItem) {
      updatedItems = currentItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedItems = [...currentItems, { ...product, quantity: 1 }];
    }

    this.cartItemsSignal.set(updatedItems);
    this.saveToStorage(updatedItems);
  }

  // Método para Eliminar del carrito
  removeFromCart(productId: string) {
    const updatedItems = this.cartItemsSignal().filter(item => item.id !== productId);
    this.cartItemsSignal.set(updatedItems);
    this.saveToStorage(updatedItems);
  }

  // Método para Actualizar cantidad en el carrito
  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const updatedItems = this.cartItemsSignal().map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    this.cartItemsSignal.set(updatedItems);
    this.saveToStorage(updatedItems);
  }

  // Método para Vaciar el carrito
  clearCart() {
    this.cartItemsSignal.set([]);
    localStorage.removeItem('mztune_cart');
  }
}
