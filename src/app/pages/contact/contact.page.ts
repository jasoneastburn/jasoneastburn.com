import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})

export class ContactPage implements OnInit {
  contactForm: FormGroup;

  constructor(
    private afa: AngularFireAnalytics,
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ionViewWillEnter(): void {
    this.titleService.setTitle('Contact | Jason Eastburn');
    this.afa.setCurrentScreen('Contact Page');
  }

  clearForm(): void {
    this.contactForm.reset();
  }

  submitForm(): void {
    this.contactService.submitContact(this.contactForm.value).then(() => {
      this.contactForm.reset();
    });
  }
}
