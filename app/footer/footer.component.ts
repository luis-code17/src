import { Component } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-footer',
  templateUrl:'footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  author = data.app.footer.author
  email = data.app.footer.email
}
