import { AbstractCtor, Constructor } from './constructor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Mixin<B = any> = (base: B) => Constructor;

type Remove<A, B> = A extends B & infer R ? R : B;

type RemoveAnyCtor<A> = Remove<A, Constructor | AbstractCtor>;

type Return<M extends Mixin> = M extends (base: infer B) => infer BR ? Remove<BR, B> : never;

export function mix<B extends Constructor, C1 extends B>(ctor: B, mixins: [(b: B) => C1]): C1;
// export function mix<B extends Constructor, C1 extends B, C2 extends C1>(
//   ctor: B,
//   mixins: [(b: B) => C1, (b: C1) => C2],
// ): C2;
// export function mix<B extends Constructor, C1 extends B, C2 extends C1, C3 extends C2>(
//   ctor: B,
//   mixins: [(b: B) => C1, (b: C1) => C2, (b: C2) => C3],
// ): C3;
// export function mix<B extends Constructor, C1 extends B, C2 extends C1, C3 extends C2, C4 extends C3>(
//   ctor: B,
//   mixins: [(b: B) => C1, (b: C1) => C2, (b: C2) => C3, (b: C3) => C4],
// ): C4;
// export function mix<
//   B extends Constructor,
//   C1 extends B,
//   C2 extends C1,
//   C3 extends C2,
//   C4 extends C3,
//   C5 extends C4,
// >(ctor: B, mixins: [(b: B) => C1, (b: C1) => C2, (b: C2) => C3, (b: C3) => C4, (b: C4) => C5]): C5;
// export function mix<
//   B extends Constructor,
//   C1 extends B,
//   C2 extends C1,
//   C3 extends C2,
//   C4 extends C3,
//   C5 extends C4,
//   C6 extends C5,
// >(
//   ctor: B,
//   mixins: [(b: B) => C1, (b: C1) => C2, (b: C2) => C3, (b: C3) => C4, (b: C4) => C5, (b: C5) => C6],
// ): C6;
// export function mix<
//   B extends Constructor,
//   C1 extends B,
//   C2 extends C1,
//   C3 extends C2,
//   C4 extends C3,
//   C5 extends C4,
//   C6 extends C5,
//   C7 extends C6,
// >(
//   ctor: B,
//   mixins:
//     | [
//         (b: B) => C1,
//         (b: C1) => C2,
//         (b: C2) => C3,
//         (b: C3) => C4,
//         (b: C4) => C5,
//         (b: C5) => C6,
//         (b: C6) => C7,
//       ],
// ): C7;
export function mix(ctor: Constructor, mixins: Mixin[]): Constructor {
  return mixins.reduce((acc, mixin) => mixin(acc), ctor);
}
