import { Component, ElementRef, HostListener } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { LogoComponent } from '../logo/logo.component';
import { slideInAnimation } from '../../models';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopBarComponent,NgbCollapseModule,LogoComponent,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [slideInAnimation]
})
export class HeaderComponent {
  isCollapsed : boolean= true;
  isSticky : boolean = false;
  constructor(private elementRef: ElementRef) { }
  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    this.isSticky = scrollPosition > this.elementRef.nativeElement.offsetHeight;
  }

}
