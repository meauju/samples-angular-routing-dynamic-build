import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MetersComponent} from "./meters.component";



const routes: Routes = [
    {
        path: '',
        component: MetersComponent,
        children: [
            {
                path: 'battery',
                loadChildren: './battery/battery.module#BatteryModule'
            },
            {
                path: 'measure-logs',
                loadChildren: './measure-logs/measure-logs.module#MeasureLogsModule'
            },
            {
                path: '',
                loadChildren: './battery/battery.module#BatteryModule'
            },
            {
                path: '**',
                loadChildren: './battery/battery.module#BatteryModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MetersRoutingModule {
}
