import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExternalModule } from './external/external.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExternalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
