import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeasureLogsComponent} from './measure-logs.component';
import {MeasureLogsRoutingModule} from './measure-logs-routing.module';

@NgModule({
  declarations: [MeasureLogsComponent],
  imports: [
    CommonModule,
    MeasureLogsRoutingModule
  ]
})
export class MeasureLogsModule { }
