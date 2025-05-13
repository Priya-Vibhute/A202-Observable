import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { ProductComponent } from "./product/product.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [ObservableExampleComponent, ProductComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observable';
}
