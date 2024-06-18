import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { cObj } from '../app.constant';
import $ from 'jquery';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  protected c = cObj;


  ngAfterViewInit(){
    $(document).on('click', '.mobile-nav-toggle', (e) => {
      $('#navbar').toggleClass('navbar-mobile');
      $(e.target).toggleClass('bi-list bi-x');
    });


    $(document).on('click', '.navbar .dropdown > a', (e) => {
      if ($('#navbar').hasClass('navbar-mobile')) { alert('here');
        e.preventDefault();
        $(e.target).next().toggleClass('dropdown-active');
      }
    });


    
    $('.scrollto').on('click', function(this: HTMLElement, e: JQuery.Event) {
      if ($(this).attr('href')) {
        e.preventDefault();
        const navbar = $('#navbar');
        if (navbar.hasClass('navbar-mobile')) {
          navbar.removeClass('navbar-mobile');
          const navbarToggle = $('.mobile-nav-toggle');
          navbarToggle.toggleClass('bi-list bi-x');
        }
        const router = new Router();
        router.navigate([$(this).attr('href')]);
      }
    });

  }

}
