import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/core/constants/router-list';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  public ROUTES: any

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ROUTES = ROUTES;
  }

  public isActiveRoute(route: string): boolean {
    const routes = this.router.url.split('/');
    return routes[1].includes(route);
  }

}
