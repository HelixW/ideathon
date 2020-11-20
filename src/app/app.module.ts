import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { RulesComponent } from './components/rules/rules.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, AboutComponent, RulesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
