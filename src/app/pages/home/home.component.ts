import { Component } from '@angular/core';
import { CarouselComponent } from '../../core/components';
import { Slide } from '../../core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides: Slide[] = [
  {
    img: 'https://cdn.pixabay.com/photo/2023/08/05/14/24/twilight-8171206_1280.jpg',
    heading: 'Project Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
  },
  {
    img: 'https://media.istockphoto.com/id/915681526/photo/bandra-worli-sea-link-mumbai.jpg?s=1024x1024&w=is&k=20&c=L5ZbPXc0iBCgz7zL6nP-Det8lXCLXeUxxBW8TBNPLVQ=',
    heading: 'Project Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
  },
  {
    img: 'https://media.istockphoto.com/id/915681490/photo/bandra-worli-sea-link-mumbai.jpg?s=1024x1024&w=is&k=20&c=owcMzn1YpOHO6JWAKoA2z1P5i3t5zHkqwVKE7inktro=',
    heading: 'Project Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
  }
]
}
