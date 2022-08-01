import { SimpleChange } from '@angular/core';

interface TypedSimpleChange<T> extends SimpleChange {
  previousValue: T;
  currentValue: T;
}
type Defined<T> = T extends undefined ? never : T;

export type TypedSimpleChanges<T> = {
  [K in keyof T]?: TypedSimpleChange<Defined<T[K]>>;
} & {
  [key: string]: SimpleChange;
};
