// <!-- <label><input type="text" name="title" [(ngModel)]="title" placeholder="Enter Product Name"/></label>
// <br>
// <label><input type="text" name="description" [(ngModel)]="description" placeholder="Enter Description"/></label>
// <br>
// <label><input type="text" name="price" [(ngModel)]="price" placeholder="Enter Price"/></label>
// <br/>
// <button (click)="(updateFlag) ?  updateProduct() : addProduct()  ">{{( updateFlag ) ? "Update Product" : "Add Product"}}</button> -->
// <div class="container" style="display: grid">
//   <div style="margin: auto">
//     <div style="margin-top: 150px">
//       <form #productFrom="ngForm" (ngSubmit)="validateProduct(productFrom)">
//         <!-- <form> -->
//         <div class="form-group">
//           <label for="exampleInputEmail1">Product title</label>
//           <br />
//           <input
//             type="text"
//             name="title"
//             [(ngModel)]="title"
//             placeholder="Enter Product Name"
//             ngModel
//             required
//             #title="ngModel"
//           />
//           <span *ngIf="title.touched && !title.valid">title is Required</span>
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Description</label>
//           <br />
//           <input
//             type="text"
//             name="description"
//             [(ngModel)]="description"
//             placeholder="Enter Description"
//             ngModel
//             required
//             #description="ngModel"
//           />
//           <span *ngIf="description.touched && !description.valid"
//             >description is Required</span
//           >
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Price base Price of product</label>
//           <br />
//           <input
//             type="text"
//             name="price"
//             [(ngModel)]="price"
//             placeholder="Enter Base Price"
//             ngModel
//             required
//             #price="ngModel"
//           />
//           <span *ngIf="price.touched && !price.valid">price is Required</span>
//         </div>
//         <div class="form-group">
//           <label for="exampleInputCountryName">country name</label>
//           <br />
//           <input
//             type="text"
//             name="countryName"
//             [(ngModel)]="countryName"
//             placeholder="Enter Country name"
//             ngModel
//             required
//             #countryName="ngModel"
//           />
//           <span *ngIf="countryName.touched && !countryName.valid"
//             >country name is Required</span
//           >
//         </div>
//         <div class="form-group">
//           <label for="exampleInputCountryPrice">country Price</label>
//           <br />
//           <input
//             type="text"
//             name="countryPrice"
//             [(ngModel)]="countryPrice"
//             placeholder="Enter Country price"
//             ngModel
//             required
//             #countryPrice="ngModel"
//           />
//         </div>
//         <!-- <button class="btn btn-primary" (click)="addProduct()" [disabled]="!isInvalid">Add Product</button>
//      -->
//         <button class="btn btn-primary" (click)="addProduct()">
//           Add Product
//         </button>
//       </form>
//     </div>
//   </div>
// </div>



//email , dropdown , check box , number [ min , max] , password , radio , multiple checkbox