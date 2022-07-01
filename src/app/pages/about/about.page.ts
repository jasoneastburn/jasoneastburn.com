import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})

export class AboutPage implements OnInit {

  constructor(
    private afa: AngularFireAnalytics,
    private titleService: Title
  ) { }

  ngOnInit(): void { }

  ionViewWillEnter() {
    this.titleService.setTitle('About | Jason Eastburn');
    this.afa.setCurrentScreen('About Page');
  }
}
