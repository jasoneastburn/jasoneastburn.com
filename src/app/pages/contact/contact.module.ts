import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ContactPage } from './contact.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule { }
