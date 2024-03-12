import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopBarComponent,LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
