import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() item: CartItem = new CartItem();
  @Output() removeCart: EventEmitter<CartItem> = new EventEmitter();
  @Output() updateQuantity: EventEmitter<CartItem> = new EventEmitter();

  removeItem() {
    this.removeCart.emit(this.item);
  }

  quantityChanged() {
    this.updateQuantity.emit(this.item);
  }

  incrQuantity() {
    if (this.item.quantity < 100) {
      this.item.quantity++;
      this.quantityChanged();
    }
  }

  decrQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
      this.quantityChanged();
    }
  }
}
