import { Component } from '@angular/core';
import {AboutComponent} from '../about/about.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(){

  }
  ngOnInit(){
    
  }
}
