import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { cObj } from '../app.constant';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
 protected c=cObj;
}
