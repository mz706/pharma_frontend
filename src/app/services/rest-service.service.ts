import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestServiceService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:3030/product');
  }
  getProductById(id : string) {
    console.log(`http://localhost:3030/product/${id}`)
    return this.http.get(`http://localhost:3030/product/${id}`);
  }
  addProduct(productInfo: any) {
    return this.http.post('http://localhost:3030/product',productInfo)
  }
  updateProduct(productInfo: any) {
    let { id, title, description, price ,contry, isActive} = productInfo;
    return this.http.patch(`http://localhost:3030/product/${id}`, {
      title,
      description,
      price,
      contry,
      isActive
    });
  }
  deleteProduct(productId: string) {
    return this.http.delete(`http://localhost:3030/product/${productId}`);
  }
}
