import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RealtimePage } from './realtime.page';
import { GoogleMapModule } from '../google-map/google-map.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapModule,
    RouterModule.forChild([{path: '', component: RealtimePage}])
  ],
  declarations: [RealtimePage]
})
export class RealtimePageModule {}
