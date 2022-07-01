import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Content',
      icon: 'information',
      path: '/content'
    },
    {
      title: 'Projects',
      icon: 'information',
      path: '/projects'
    },
    {
      title: 'About',
      icon: 'list',
      path: '/about'
    },
    {
      title: 'Contact',
      icon: 'information',
      path: '/contact'
    },
  ];


  constructor(
    private menuController: MenuController,
    private platform: Platform,
  ) { }

  ngOnInit() {
    const width = this.platform.width();
    this.toggleMenu(width);
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
  }

  toggleMenu(width) {
    if (width > 768) {
      this.menuController.enable(false, 'myMenu');
    } else {
      this.menuController.enable(true, 'myMenu');
    }
  }
}
