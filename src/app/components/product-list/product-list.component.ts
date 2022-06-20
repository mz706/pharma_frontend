import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from 'src/app/services/rest-service.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: any;

  constructor(private restService: RestServiceService, private route: Router,private toastService : NgToastService) {
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts() {
    this.restService.getProducts().subscribe((data : any) => {
      console.log('response is', data);
      this.products = data;
      if(this.products.length == 0)
      {
        this.toastService.error({detail : "Error message",summary: "No product available into database",duration : 2000})
      }
    });
  }

  deleteProduct(id: any, index: any) {
    console.log('deleteProduct is clicked with id', id, index);
    this.restService.deleteProduct(id).subscribe((data) => {
      if (data) {
        console.log('delete response', data);
        //refresh the product table
        this.getProducts();
      }
    });
  }

  updateProduct(id: any, index: any) {
    console.log('updateProduct is clicked with id', id, index ,this.products[index]);
    this.route.navigate(['/updateproduct'], { state: this.products[index] });
  }

  refreshProductTable() {
    this.getProducts();
  }
}
