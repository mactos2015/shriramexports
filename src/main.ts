import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterLink } from '@angular/router';
//import {cObj} from './app/app.constant';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  

  
    