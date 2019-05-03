import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {NavMenuComponent} from '../components/nav-menu/nav-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        // ,HomeComponent
        // ,MetersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
