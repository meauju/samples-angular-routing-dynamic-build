import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MetersComponent} from 'src/app/meters/components/meters/meters.component';

const routes: Routes = [
    {
        path: '',
        component: MetersComponent,
        children: [
            {
                path: 'power',
                loadChildren: '../power/power.module#PowerModule'
            },
            {
                path: 'battery',
                loadChildren: '../battery/battery.module#BatteryModule'
            },
            {
                path: 'measure-logs',
                loadChildren: '../measure-logs/measure-logs.module#MeasureLogsModule'
            },
            {
                path: '',
                loadChildren: '../power/power.module#PowerModule'
            },
            {
                path: '**',
                loadChildren: '../power/power.module#PowerModule'
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
