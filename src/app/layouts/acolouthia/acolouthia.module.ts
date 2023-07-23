import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AcolouthiaComponent } from './acolouthia.component';
import {
  GreatVespersComponent,
  LittleEkteniaComponent,
  ReplicaComponent,
  VespersComponent,
} from './components';
import { EkteniaComponent } from './components/ektenia/ektenia.component';
import { BlessedManComponent, KyrieEkekraxaComponent } from './components/vespers';
import { EchoModule } from './pipes/echo';
import { Минея, Типикон } from './typicon';

const routes: Route[] = [{ path: '', component: AcolouthiaComponent, pathMatch: 'full' }];

@NgModule({
  imports: [
    CommonModule,
    EchoModule,
    EkteniaComponent,
    FormsModule,
    ReactiveFormsModule,
    ReplicaComponent,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AcolouthiaComponent,
    VespersComponent,
    GreatVespersComponent,
    BlessedManComponent,
    KyrieEkekraxaComponent,
    LittleEkteniaComponent,
  ],
  providers: [Типикон, Минея],
})
export class AcolouthiaModule {}
