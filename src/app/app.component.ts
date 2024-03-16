import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { FooterComponent, HeaderComponent } from './core/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Randomsena';
  constructor(private meta: Meta, private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle(this.title+' | Home');
    this.meta.updateTag({ name: 'description', content: 'Combatting Anti Hindu Narrative | Forced 100+ Influencers to delete their Anti Hindu Posts | Got 63+ Adharmis arrested | Independent Hindutva Page' });
  }

}
