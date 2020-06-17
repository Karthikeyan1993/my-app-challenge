import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentTheme = 'dark';
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {

  }


  changeTheme = () => {
    this.currentTheme = this.currentTheme === 'dark' ? 'white' : 'dark';
    this.themeService.setTheme(this.currentTheme);
  }

  getThemeClass = () => {
    console.log(this.currentTheme);
    return {
      '': this.currentTheme === 'dark',
      'fa-flip-horizontal': this.currentTheme === 'white'
    };
  }



}
