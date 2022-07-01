import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsPageRoutingModule } from './projects-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ProjectsPage } from './projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ProjectsPage]
})
export class ProjectsPageModule { }
