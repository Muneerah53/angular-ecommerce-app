import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product = new Product();

  constructor(private cart: CartService) {}

  add(p: Product): void {
    this.cart.addToCart(p, 1);
    alert(`Added ${p.name} to your cart.`);
  }
}
