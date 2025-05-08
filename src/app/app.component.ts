import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableExampleComponent } from './observable-example/observable-example.component';

@Component({
  selector: 'app-root',
  imports: [ObservableExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observable';
}
