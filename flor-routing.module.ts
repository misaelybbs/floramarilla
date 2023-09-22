import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlorPage } from './flor.page';

const routes: Routes = [
  {
    path: '',
    component: FlorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlorPageRoutingModule {}
