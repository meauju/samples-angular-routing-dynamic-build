import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BatteryComponent} from './component/battery/battery.component';
import {BatteryRoutingModule} from './battery-routing.module';

@NgModule({
  declarations: [BatteryComponent],
  imports: [
    CommonModule,
    BatteryRoutingModule
  ]
})
export class BatteryModule { }
