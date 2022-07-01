import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.titleService.setTitle('Project | Jason Eastburn');
  }
}
