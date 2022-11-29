import { Product } from './product.model';

export class CartItem {
  product: Product;
  quantity: number;
  total: number;

  constructor() {
    this.product = new Product();
    this.quantity = 0;
    this.total = 0;
  }
}
