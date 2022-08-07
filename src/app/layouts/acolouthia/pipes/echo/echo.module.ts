import { NgModule } from '@angular/core';

import { EchoPipe } from './echo.pipe';

@NgModule({
  declarations: [EchoPipe],
  exports: [EchoPipe],
})
export class EchoModule { }
