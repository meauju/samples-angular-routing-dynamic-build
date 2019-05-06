import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NavModule} from 'src/app/nav/nav.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
