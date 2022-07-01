import { Component, OnInit } from '@angular/core';
import { QuotesService } from './services/quotes.service';
import { Observable, Subject } from 'rxjs';
import { Quote } from 'src/app/models/quote';
import { shareReplay, takeUntil, tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.anonymousLogin();
  }
}
