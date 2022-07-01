import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getAllQuotes() {
    return this.afs.collection<Quote>('quotes').valueChanges();
  }
}
