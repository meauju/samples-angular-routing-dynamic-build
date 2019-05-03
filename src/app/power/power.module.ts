import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PowerRoutingModule} from './power-routing.module';
import {PowerComponent} from './power.component';

@NgModule({
  declarations: [PowerComponent],
  imports: [
    CommonModule,
    PowerRoutingModule
  ]
})
export class PowerModule { }
