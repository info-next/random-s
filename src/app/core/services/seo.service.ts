import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OgTags } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titleService: Title, private metaService: Meta) { }

  updateTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  updateDescription(description: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
  }

  updateKeywords(keywords: string): void {
    this.metaService.updateTag({ name: 'keywords', content: keywords });
  }

  updateAuthorMetaTag(author: string): void {
    this.metaService.updateTag({ name: 'author', content: author });
  }

  updateOgTags(tags: OgTags): void {
    this.metaService.updateTag({ property: 'og:url', content: tags.url });
    this.metaService.updateTag({ property: 'og:title', content: tags.title });
    this.metaService.updateTag({ property: 'og:description', content: tags.description });
    this.metaService.updateTag({ property: 'og:image', content: tags.image });
    this.metaService.updateTag({ property: 'og:type', content: tags.type });
  }

  // Add more methods for handling other meta tags as needed
}
