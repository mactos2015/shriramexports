import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import {FooterComponent} from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import $ from 'jquery';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent, TopbarComponent, FooterComponent, RouterModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shriramexports';
  phone = '+91 98181 06403';
  email = "sksteeludhyog@gmail.com";

    constructor(){
      
    }
    ngAfterViewInit(){
    
    }
}
