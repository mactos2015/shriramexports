import { Component } from '@angular/core';
import { cObj } from '../app.constant';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
 protected c=cObj;
}
