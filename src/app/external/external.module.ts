import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewService } from './new.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NewService
  ],
  declarations: []
})
export class ExternalModule { }
