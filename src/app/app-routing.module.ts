import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavMenuComponent} from '../components/nav-menu/nav-menu.component';


const routes: Routes = [
    {
        path: '',
        outlet: 'navmenu',
        component: NavMenuComponent
    },
    {
        path: 'home',
        loadChildren: '../components/home/home.module#HomeModule'
    },
    {
        path: 'meters',
        loadChildren: '../components/meters/meters.module#MetersModule'
    },
    {
        path: 'settings',
        loadChildren: '../components/settings/settings.module#SettingsModule'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
