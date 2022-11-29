import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() {}

  getCartItems() {
    return this.cart.asObservable();
  }

  addToCart(product: Product, qtty: number) {
    const cartItemList = this.cart.getValue();
    let item = cartItemList.find((i) => i.product.id === product.id);
    if (!item) {
      const cartItem: CartItem = {
        product: product,
        quantity: qtty,
        total: product.price * qtty,
      };
      cartItemList.push(cartItem);
      this.cart.next(cartItemList);
    } else {
      item.quantity += qtty;

      this.updateQuantity(item);
    }
  }

  removeFromCart(product: Product) {
    let cartItemList = this.cart.getValue();
    cartItemList = cartItemList.filter((i) => i.product.id !== product.id);
    this.cart.next(cartItemList);
  }

  updateQuantity(item: CartItem) {
    item.total = item.product.price * item.quantity;
    this.cart.next(this.cart.getValue());
  }

  clearCart() {
    this.cart.next([]);
  }
}
