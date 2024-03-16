import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { LogoComponent } from '../logo/logo.component';
import { slideInAnimation } from '../../models';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopBarComponent,NgbCollapseModule,LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [slideInAnimation]
})
export class HeaderComponent {
  isCollapsed : boolean= false;
}
