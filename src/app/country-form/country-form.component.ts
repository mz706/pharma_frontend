import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-country-form',
  template: `
    <fieldset ngModelGroup="group" class="border border-secondry p-3 m-2 rounded">
      <div>
        <label>Country:</label>
        <input type="text" [name]="group + 'name'" [(ngModel)]="data.name" required placeholder="Enter Country Name">
      </div>
      <div>
        <label>Price:</label>
        <input type="text" [name]="group + 'price'" [(ngModel)]="data.price" required placeholder="Enter Country Price">
      </div>
     </fieldset>
  `,
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class CountryFormComponent{
  @Input() data: any ;
  @Input() group: any ;
  
}
