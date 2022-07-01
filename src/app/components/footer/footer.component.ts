import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, shareReplay } from 'rxjs/operators';
import { Quote } from 'src/app/models/quote';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  quotes$: Observable<Quote[]>;
  quote: Quote;
  unsubscribe$ = new Subject();
  year: number = new Date().getFullYear();

  constructor(
    private quotesService: QuotesService,
  ) { }

  ngOnInit() {
    this.loadQuotes();
  }

  loadQuotes() {
    this.quotesService.getAllQuotes()
      .pipe(
        takeUntil(this.unsubscribe$),
        shareReplay(1),
      ).subscribe(results => {
        this.quote = results[Math.floor(Math.random() * results.length)];
      });
  }
}
