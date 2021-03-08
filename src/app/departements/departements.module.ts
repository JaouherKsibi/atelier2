import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartementsPageRoutingModule } from './departements-routing.module';

import { DepartementsPage } from './departements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartementsPageRoutingModule
  ],
  declarations: [DepartementsPage]
})
export class DepartementsPageModule {}
