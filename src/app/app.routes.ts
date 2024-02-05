import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';

export const routes: Routes = [
    { path:'', component:HomeComponent},
    { path:'about', component:AboutComponent },
    { path:'product', component:ProductComponent},
    { path:'gallery', component:GalleryComponent},
    { path:'infrastructure', component:InfrastructureComponent},
    { path:'contact', component:ContactComponent}
];
