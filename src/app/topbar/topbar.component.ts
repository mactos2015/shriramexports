import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { cObj } from '../app.constant';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  protected c = cObj;
}
