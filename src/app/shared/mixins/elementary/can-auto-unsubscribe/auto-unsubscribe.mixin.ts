import { Directive, OnDestroy } from '@angular/core';

/* eslint-disable max-classes-per-file */
import { Subscription } from 'rxjs';

import { AbstractCtor, Constructor } from '../constructor';

export type CanAutoUnsubscribe = { newSubscription: Subscription };

export type CanAutoUnsubscribeCtor = AbstractCtor<CanAutoUnsubscribe>;

export function mixinAutoUnsubscribe<TBase extends Constructor>(
  Base: TBase,
): CanAutoUnsubscribeCtor & TBase {
  @Directive()
  abstract class CanAutoUnsubscribe extends Base implements OnDestroy {
    private readonly _subscriptions = new Subscription();

    public set newSubscription(sub: Subscription) {
      this._subscriptions.add(sub);
    }

    ngOnDestroy(): void {
      this._subscriptions.unsubscribe();
    }
  }

  return CanAutoUnsubscribe;
}
