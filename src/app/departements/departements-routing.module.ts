import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartementsPage } from './departements.page';

const routes: Routes = [
  {
    path: '',
    component: DepartementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartementsPageRoutingModule {}
