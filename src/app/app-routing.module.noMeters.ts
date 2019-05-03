import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavMenuComponent} from './nav/components/nav-menu/nav-menu.component';


const routes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
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
