import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }

  getProductDetails(productID: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((prodList) => {
        return prodList.find((p) => p.id === productID);
      })
    );
  }
}
