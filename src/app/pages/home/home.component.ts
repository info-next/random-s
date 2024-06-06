import { Component } from '@angular/core';
import { CarouselComponent } from '../../core/components';
import { BlogPost, OgTags, Slide, dummyBlogs, slides } from '../../core/models';
import { BlogCardComponent } from '../../core/components/blog-card/blog-card.component';
import { SlicePipe } from '@angular/common';
import { CounterComponent } from '../../core/components/counter/counter.component';
import { SeoService } from '../../core/services/seo.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,BlogCardComponent,SlicePipe,CounterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides: Slide[] = slides;
  blogs: BlogPost[] = dummyBlogs;
  metaTitle: string = 'Home | Dummy';
  ogUrl: string = 'https://random-s.vercel.app';
  ogImg: string = 'https://random-s-info-nexts-projects.vercel.app/assets/images/projects/project4.jpg';
  metaDesc: string = 'Dummy description for home page of random-s.vercel.app'; 
  constructor(private seoService: SeoService) {
    this.updateSeo();
  }
  updateSeo(){
    this.seoService.updateTitle(this.metaTitle);
    this.seoService.updateDescription(this.metaDesc);
    this.seoService.updateKeywords('');
    this.seoService.updateAuthorMetaTag('Dummy');
  
    const ogTags: OgTags = {
      url: this.ogUrl,
      title: this.metaTitle,
      description: this.metaDesc,
      image: this.ogImg ,
      type: 'website',
      site_name: 'Dummy'
    }
    this.seoService.updateOgTags(ogTags);
  }

}
