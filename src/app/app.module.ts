import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WithoutTypeBindingComponent } from './without-type-binding/without-type-binding.component';
import { WithOneWayBindingComponent } from './with-one-way-binding/with-one-way-binding.component';

@NgModule({
  declarations: [AppComponent, WithoutTypeBindingComponent, WithOneWayBindingComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
