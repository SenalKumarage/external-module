import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExternalModule } from './external/external.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    ExternalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
