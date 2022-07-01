import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from './authentication.service';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  constructor(
    private afs: AngularFirestore,
    private authenticationService: AuthenticationService
  ) { }

  async submitContact(contactData: Contact): Promise<void> {
    contactData.timestamp = new Date().toLocaleString();
    await this.authenticationService.anonymousLogin().then(() => {
      this.afs.collection('contact').add(contactData);
    });
  }
}
