import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
