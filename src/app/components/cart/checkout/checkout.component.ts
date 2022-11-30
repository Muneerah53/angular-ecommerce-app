import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  cardNumber: string = '';
  cardExpiry: string = '';
  cardCVC: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cart: CartService
  ) {}

  checkout() {
    this.cart.clearCart();
    this.router.navigate(['/success'], { relativeTo: this.route });
  }

  errorMsg(): string {
    if (this.firstName.trim().length === 0) {
      return '* First name required';
    }
    if (this.firstName.trim().length < 3 || this.firstName.trim().length > 30) {
      return '* First name must be between 3 to 30 characters';
    }
    if (this.lastName.trim().length === 0) {
      return '* Last name required';
    }
    if (this.lastName.trim().length < 3 || this.lastName.trim().length > 30) {
      return '* Last name must be between 3 to 30 characters';
    }
    if (this.address.trim().length === 0) {
      return '* Address required';
    }
    if (this.address.trim().length < 6 || this.address.trim().length > 50) {
      return '* Address must be between 6 to 50 characters';
    }
    if (this.cardNumber.trim().length === 0) {
      return '* Card Number required';
    }
    if (
      this.cardNumber.trim().length < 8 ||
      this.cardNumber.trim().length > 19
    ) {
      return '* Card Number must be between 8 to 19 digits';
    }
    if (this.cardExpiry.trim().length === 0) {
      return '* Card Expiry Date required';
    }
    if (this.cardCVC == null) {
      return '* Card CVC required';
    }
    if (this.cardCVC.toString().length === 0) {
      return '* Card CVC required';
    }
    if (!this.cardCVC.toString().match(new RegExp('[0-9]{3}'))) {
      return '* Card CVC is required and must be 3 digits';
    }

    return '';
  }
}
