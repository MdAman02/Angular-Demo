import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/Counter.component';
import { HomeComponent } from './components/Home.component';
import { InfoHubComponent } from './components/InfoHub.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoHubComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
