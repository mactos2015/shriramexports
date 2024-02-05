import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = [
    {name:'Alternator,startor and AC Compressors', url:'asc.jpeg'},
    {name:'Motor scrap', url:'motors.jpeg'},
    {name:'Automobile engine scrap', url:'automobiles.jpg'},
    {name:'Transformer scrap', url:'transformers.jpeg'},
    {name:'Copper scrap', url:'coppers.jpg'},
    {name:'Aluminum scrap', url:'aluminiums.jpg'},
    {name:'Brass scrap', url:'brasss.jpg'},
    {name:'E-meter Scrap', url:'e-meters.jpg'},
    {name:'Cable scrap', url:'cables.jpg'}
  ]
}
