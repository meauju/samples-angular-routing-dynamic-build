import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeasureLogsComponent} from './measure-logs.component';



const routes: Routes = [
    {
        path: '',
        component: MeasureLogsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeasureLogsRoutingModule { }
