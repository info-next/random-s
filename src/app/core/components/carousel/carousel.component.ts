import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Slide, slideDownAnimation, slideFromTop, slideInAnimation } from '../../models';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [slideInAnimation, slideDownAnimation,slideFromTop]
})
export class CarouselComponent {
@Input() slides: Slide[] = [];
isSlderActive = true;
}
