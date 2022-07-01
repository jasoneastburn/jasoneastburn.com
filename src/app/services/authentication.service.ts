import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  authState: any = null;

  constructor(
    private angularFireAuth: AngularFireAuth
  ) {
    this.angularFireAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : '';
  }

  async anonymousLogin(): Promise<void> {
    if (this.isUserAnonymousLoggedIn) {
      return;
    }
    try {
      const user = await this.angularFireAuth.signInAnonymously();
      this.authState = user;
    }
    catch (error) {
      return console.log(error);
    }
  }

  signOut(): void {
    this.angularFireAuth.signOut();
  }
}
