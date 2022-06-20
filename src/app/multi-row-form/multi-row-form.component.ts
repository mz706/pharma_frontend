import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-multi-row-form',
  templateUrl: './multi-row-form.component.html',
  styleUrls: ['./multi-row-form.component.css']
})
export class MultiRowFormComponent  {
  product: any[] = [];
  allChecked: boolean = false;
  submitForm(e: NgForm) {
    console.log(e.value);
    this.product.push({ id: this.product.length, ...e.value, checked: false });
  }

  flipAllCheckbox(e : any) {
    // console.log("event",e)
    // this.allChecked = !this.allChecked
    console.log('select all status is', this.allChecked, e.target.checked);
    // console.log("before" , this.product)
    this.product = this.product.map((pro) => {
      return { ...pro, checked: e.target.checked };
    });
    // console.log("after " , this.product)
  }

  deleteProduct() {
    console.log('before', this.product);
    this.product = this.product.filter((ele) => !ele.checked);
    console.log('after', this.product);
    this.allChecked = false
  }


}
