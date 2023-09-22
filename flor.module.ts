import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlorPageRoutingModule } from './flor-routing.module';

import { FlorPage } from './flor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlorPageRoutingModule
  ],
  declarations: [FlorPage]
})
export class FlorPageModule {}
