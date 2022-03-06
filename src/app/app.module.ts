import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcolouthiaModule } from './modules/acolouthia';

@NgModule({
  imports: [BrowserModule, AcolouthiaModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
