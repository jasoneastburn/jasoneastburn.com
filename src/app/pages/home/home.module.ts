import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
