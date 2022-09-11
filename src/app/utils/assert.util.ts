export function assert<T>(day: T | undefined | null): asserts day is T {
  if (!day) {
    throw new Error('must be not nullable');
  }
}
