import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: CartItem[] = [];
  cartTotal: number = 0;
  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.getCartItems().subscribe((data) => {
      this.cartItems = data;
      this.calculateCartAmount();
    });
  }

  calculateCartAmount() {
    this.cartTotal = 0;

    this.cartItems.forEach((item) => {
      this.cartTotal += item.total;
    });
  }

  removeFromCart(item: CartItem) {
    this.cart.removeFromCart(item.product);
    alert(`Item ${item.product.name} removed from your cart.`);
  }

  updateQuantity(item: CartItem) {
    this.cart.updateQuantity(item);
  }
}
