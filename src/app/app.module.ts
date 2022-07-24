import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainRouting } from './routing/main.routing';

@NgModule({
  imports: [BrowserModule, MainRouting],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
