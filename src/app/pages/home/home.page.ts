import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { takeUntil, shareReplay, tap } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imageSource: string;
  projects$: Observable<Project[]>;
  unsubscribe$ = new Subject();

  constructor(
    private projectService: ProjectsService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.loadProjects();
    this.randomizePhoto();
  }

  ionViewWillEnter() {
    this.titleService.setTitle('Home | Jason Eastburn');
  }

  loadProjects() {
    this.projects$ = this.projectService.getActiveProjects()
      .pipe(
        takeUntil(this.unsubscribe$),
        shareReplay(1),
        tap(results => {
          results.sort((a, b) => a.id < b.id ? -1 : 1);
        })
      );
  }

  randomizePhoto() {
    this.imageSource = '../../assets/images/profile-photos/profile1.jpg';
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      this.imageSource = '../../assets/images/profile-photos/profile' + randomNumber + '.jpg';
    }, 3000);
  }

}
