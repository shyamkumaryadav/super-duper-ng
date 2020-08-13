import { Component } from '@angular/core';
import {ProComponent} from './products/product.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  direactives: [ProComponent]
})
export class AppComponent {
  title = 'APM';
  message: string = 'Hello world!'
}
