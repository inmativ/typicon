import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AcolouthiaComponent } from './acolouthia.component';
import { ReplicaComponent } from './components/replica/replica.component';
import { SticheronComponent } from './components/sticheron/sticheron.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AcolouthiaComponent, ReplicaComponent, SticheronComponent],
  exports: [AcolouthiaComponent],
})
export class AcolouthiaModule {}
