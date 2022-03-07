import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AcolouthiaComponent } from './acolouthia.component';
import { ReplicaComponent } from './components/replica/replica.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AcolouthiaComponent, ReplicaComponent],
  exports: [AcolouthiaComponent],
})
export class AcolouthiaModule {}
