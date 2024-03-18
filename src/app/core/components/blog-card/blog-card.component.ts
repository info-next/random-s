import { Component, Input } from '@angular/core';
import { BlogPost } from '../../models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
@Input() blog?: BlogPost;
}
