import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blogs', loadComponent: () => import('./pages/blogs/blogs.component').then(m => m.BlogsComponent) },
    { path: 'blog-detail', loadComponent: () => import('./pages/blogs/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent) },
];
