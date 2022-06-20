import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestServiceService } from '../services/rest-service.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  ngOnInit(): void {}
  public id: string = '';
  public product_name: string = '';
  public description: string = '';
  public price: any;
  public updateFlag: boolean = false;
  public productToUpdate: any;
  public countryArray: any;
  public isActive: boolean = false;
  public keywords: string[] = [];
  public sallerEmail: string = '';
  public sallerPassword: string = '';
  public mobile: string = '';
  public sallerName: string = '';
  
  config: any = {};

  // public countryPrice : number  = 0

  constructor(
    private httpService: RestServiceService,
    private route: Router,
    private toastService: NgToastService
  ) {
    //get data to update
    this.productToUpdate = this.route.getCurrentNavigation()?.extras.state;
    if (this.productToUpdate) {
      this.updateFlag = true;
      console.log('productToUpdate', this.productToUpdate);
      this.id = this.productToUpdate['_id'];
      console.log('in updateProduct component', this.id);
      this.getProduct();
    }
  }

  getProduct() {
    this.httpService.getProductById(this.id).subscribe(
      (data: any) => {
        if(data) {
          console.log('product details', data);
          //reset the form data
          this.product_name = data['productName'];
          this.description = data['description'];
          this.price = data['price'].basePrice;
          this.countryArray = data['country'];
          this.isActive = data['isActive'];
          this.keywords = data['keywords'];
          this.sallerEmail = data['sallerEmail'];
          this.sallerPassword = data['sallerPassword'];
          this.mobile = data['mobile'];
          this.sallerName = data['sallerName'];
          this.config = this.countryArray;
          console.log("hiii")
          console.log("details",
            this.product_name ,
          this.description ,
          this.price ,
          this.countryArray ,
          this.isActive,
          this.keywords ,
          this.sallerEmail ,
          this.sallerPassword ,
          this.mobile ,
          this.sallerName ,
          this.config 
          )

        } else {
          console.log('some error occurs', data);
        }
      },
      (err)=>{
        console.log('error', err);
  
        this.toastService.error({
          detail: 'Failed!',
          summary: 'Product detail fetching failed',
          duration: 3000,
        });
      }
    )
    
  }

  updateProduct(e: NgForm) {
    let data = {
      productName: e.value.productName,
      description: e.value.description,
      price: { basePrice: e.value.price },
      // country: this.config['country'],
      keywords:e.value.keywords.split(","),
      sallerPassword : e.value.pass,
      sallerEmail : e.value.email1,
      mobile:[e.value.sallerNumber],
      sallerName : e.value.sallerName,
    };
    console.log('update data', data);
    this.httpService.updateProduct(data).subscribe((data) => {
      if (data) {
        this.toastService.success({
          detail: 'Success message',
          summary: 'Product updated successfully',
          duration: 2000,
        });
        console.log('product updated', data);
        //reset the form data
        e.reset()
        // this.title = '';
        // this.description = '';
        // this.price = 0;
        // this.countryArray = [];
        // this.price = { basePrice: 0 };
      } else {
        console.log('some error occurs', data);

      }
    },
    (err)=>{
      console.log('error', err);

      this.toastService.error({
        detail: 'Failed!',
        summary: 'Product updation failed',
        duration: 3000,
      });
    });
  }

  addCountryForm() {
    this.config['country'].push({
      name: '',
      price: 1,
      })
  }

  removeCountryForm(i : number)
  {
    console.log("before" , this.config['country'] , i);   
   this.config['address'] =  this.config['country'].splice( i, 1)
   console.log("after" , this.config['country']);
  }

}
