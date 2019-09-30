import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4000/products';
  constructor(private http: HttpClient) { }
  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName: String,
      ProductDescription: String,
      ProductPrice: Number
    };
    console.log(obj);
    this
    .http
    .post(`this.${this.uri}/add`, obj)
    .subscribe(res => console.log('Done!'));
  }
  getProduct() {
    return this
    .http
    .get(`${this.uri}`);
  }
  editProduct(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName: String,
      ProductDescription: String,
      ProductPrice: Number
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
  }
}
