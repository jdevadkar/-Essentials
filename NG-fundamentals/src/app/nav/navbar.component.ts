import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  .nav.navbar-nav {font-size:15px;}
  #searchForm {margin-right:100px;}
  @media (max-width:1200px) {#searchForm {display:non}}
  li > a.active { color: #F979224;}
  `]
})

export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
