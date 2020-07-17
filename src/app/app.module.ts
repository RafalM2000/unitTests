import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerService } from './customer.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
