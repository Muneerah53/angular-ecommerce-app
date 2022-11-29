import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id: any;
  product: Product = new Product();
  quantity: number = 1;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cart: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));

    this.productsService.getProductDetails(this.id).subscribe((data) => {
      if (data != undefined) this.product = data;
    });
  }

  addToCart() {
    this.cart.addToCart(this.product, this.quantity);
    alert(`Added ${this.quantity} of ${this.product.name} to your cart.`);
  }
}
