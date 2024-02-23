import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenubarModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'Counter',
      routerLink: 'counter',
    },
  ]

  constructor(private router: Router) {
  }

  handleClickLogo(){
    this.router.navigate(['']);
  }
}
