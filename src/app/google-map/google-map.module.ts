import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GoogleMapComponent } from './google-map.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [GoogleMapComponent],
  exports: [GoogleMapComponent],
})
export class GoogleMapModule { }
