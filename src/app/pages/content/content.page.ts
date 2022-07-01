import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.titleService.setTitle('Content | Jason Eastburn');
  }
}
