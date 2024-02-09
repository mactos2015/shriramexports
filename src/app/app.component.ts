import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TopbarComponent, FooterComponent, RouterModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shriramexports';
  phone = '+91 98181 06403';
  email = "sksteeludhyog@gmail.com";

}
