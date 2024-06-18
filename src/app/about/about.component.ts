import { Component } from '@angular/core';
import { cObj } from '../app.constant';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected c=cObj;
  constructor(){
  }
}
