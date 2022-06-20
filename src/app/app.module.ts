import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RestServiceService } from './services/rest-service.service';
import { HomeComponent } from './home/home.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { NgToastModule } from 'ng-angular-popup';
import { CountryFormComponent } from './country-form/country-form.component';
import { MultiRowFormComponent } from './multi-row-form/multi-row-form.component';
import { FormComponent } from './form/form.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomeComponent,
    UpdateProductComponent,
    CountryFormComponent,
    MultiRowFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [
    RestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
