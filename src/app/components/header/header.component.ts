import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartLength: number = 0;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.getCartItems().subscribe((data) => {
      this.cartLength = data.length;
    });
  }
}
