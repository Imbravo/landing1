import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';

import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
