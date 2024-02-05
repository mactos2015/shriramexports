import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  products = 
    [
    {url:'aluminiumscrap.jpg', type:'d'},
    {url:'1.jpeg', type:'a'},
    {url:'transformerscrap.jpg', type:'d'},
    {url:'3.jpeg', type:'a'},
    {url:'automobiles2.jpeg', type:'d'},
    {url:'2.jpeg', type:'a'},
    {url:'brassscrap.jpg', type:'d'},
    {url:'cablescrap.jpg', type:'d'},
    {url:'4.jpeg', type:'a'},
    {url:'5.jpeg', type:'a'},
    {url:'automobiles.jpeg', type:'d'},
    {url:'copperscrap.jpg', type:'d'},
    {url:'emeterscrap.jpg', type:'d'},
    {url:'motorscrap.jpg', type:'d'},
    {url:'transf1.jpg', type:'d'},
    {url:'transf2.jpeg', type:'d'},
    {url:'trasnf3.jpg', type:'d'}
  ];
  imagepath="assets/img/gallery/dismantling/aluminiumscrap.jpg";

}
