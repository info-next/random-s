import { Component } from '@angular/core';
import { CarouselComponent } from '../../core/components';
import { BlogPost, Slide, dummyBlogs, slides } from '../../core/models';
import { BlogCardComponent } from '../../core/components/blog-card/blog-card.component';
import { SlicePipe } from '@angular/common';
import { CounterComponent } from '../../core/components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,BlogCardComponent,SlicePipe,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides: Slide[] = slides;
  blogs: BlogPost[] = dummyBlogs;

}
