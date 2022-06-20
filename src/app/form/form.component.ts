import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  productName = ""
  countryName = ""
  countryPrice = ""
  country : any = []
  
  addCountry()
  {
    // this.config.country.push({
    //   name: this.countryName,
    //   price: this.countryPrice,
    //   checked : false
    //   })
    
    console.log("hiii" , this.country);
    this.country.push({
      name : this.countryName,
      price : this.countryPrice,
      checked : false
    })
  this.countryName = ""
  this.countryPrice = ""
    console.log("before" , this.country);
    
  }  
 
  config: any = {};

  ngOnInit() {
    this.config = {
      country: []
    }
  }
  public numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }

}
