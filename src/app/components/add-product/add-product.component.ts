import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from 'src/app/services/rest-service.service';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public productName: string = '';
  // public description: string = '';
  // public basePrice: any;
  // public countryName: string = '';
  // public countryPrice: number = 0;
  // public isInvalid: boolean = false;
  // public country: string | undefined;
  // public keywords : string[] = []
  // defaultCountry = '';
  countryName : string = "";
  countryPrice : string  = ""
  allChecked : boolean = false
  country : any = []
  constructor(
    private httpService: RestServiceService,
    private toastService: NgToastService
  ) {}

  config: any = {};

  ngOnInit() {
    this.config = {
      country: []
    }
  }

  // addCountryForm() {
  //   this.config['country'].push({
  //     name: '',
  //     price: 1,
  //     })
  // }

  // @ViewChild('myForm') form: NgForm;

  addProduct(e: NgForm) {
    
    console.log("keywords",e.value.keywords.split(",")
    // .map((e : string)=>{
    //   if(!(e == "" || e==" "))
    //   {
    //     return e;
    //   }
    // })
    )
    console.log('errors ', e.errors);
    let data = {
      productName: e.value.productName,
      description: e.value.description,
      price: { basePrice: parseInt(e.value.price) },
      country: this.country,
      keywords:e.value.keywords.split(","),
      sallerPassword : e.value.pass,
      sallerEmail : e.value.email1,
      mobile:[ parseInt( e.value.sallerNumber )],
      sallerName : e.value.sallerName,
    };

    console.log('product info before adding', data);

    this.httpService.addProduct(data).subscribe(
      (data) => {
        if (data) {
          console.log('product added', data);
          this.toastService.success({
            detail: 'Success message',
            summary: 'Product added successfully',
            duration: 3000,
          });
          //reset the from through template driven logic
          e.reset()
        } else {
          console.log('data with err' , data);
          // this.toastService.error({detail : "Failed!",summary: "Product adding failed",duration : 2000})
        }
      },
      (err) => {
        console.log('error', err);

        this.toastService.error({
          detail: 'Failed!',
          summary: 'Product adding failed',
          duration: 3000,
        });
      }
    );
  }

  validateProduct(productFrom: any) {
    console.log('form submit logs', productFrom);
  }

  fun(e: any) {
    console.log('error object is', e);
  }
  removeCountryForm(i : number)
  {
    console.log("before" , this.config['country'] , i);   
   this.config['address'] =  this.config['country'].splice( i, 1)
   console.log("after" , this.config['country']);
  }
  addCountry(form : any)
  {
  // console.log("log" , price , name);
  Object.keys(form.controls).forEach(key => {
    form.get("countryPrice1").setErrors(null) ;
    
    form.get("countryName1").setErrors(null) ;
});
    // this.config.country.push({
    //   name: this.countryName,
    //   price: this.countryPrice,
    //   checked : false
    //   })
    debugger
    // console.log("hiii" , e);
    this.country.push({
      name : this.countryName,
      price : this.countryPrice,
      checked : false
    })
  this.countryName = ""
  this.countryPrice = ""
    console.log("before" , this.country);
    
    // e.reset()
    
  }  
  
  deleteProduct() {
    console.log('before', this.country);
    this.country = this.country.filter((ele : any) => !ele.checked);
    console.log('after', this.country);
    this.allChecked = false
  }

  
  flipAllCheckbox(e : any) {
    // console.log("event",e)
    // this.allChecked = !this.allChecked
    console.log('select all status is', this.allChecked, e.target.checked);
    // console.log("before" , this.product)
    this.country = this.country.map((pro : any) => {
      return { ...pro, checked: e.target.checked };
    });
    // console.log("after " , this.product)
  }
  keyPressNumber(e : any)
  {
    let charCode = (e.which ) ? e.which : e.keyCode;
    if( (charCode < 48 || charCode > 57))
    {
      e.preventDefault()
      return false
    }else{
      return true;
    }
  }

  public numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }

}
