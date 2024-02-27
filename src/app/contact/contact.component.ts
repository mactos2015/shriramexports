import { Component } from '@angular/core';
import { cObj } from '../app.constant';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected c = cObj;
  constructor(){
    console.log('Contact module loaded.');
  }
}
