interface IBranding<F extends string> {
  _brand: F;
}
export type Brand<T, F extends string> = T & IBranding<F>;
