
export interface ShopifyErrorLike {
  status: number;
  message: Error;
  cause: Error;
}

export function isObject(object: unknown): object is Record<string, unknown> {

  /*
     1. **Type Predicate (`object is Record<string, unknown>`)**:
     - The part `object is Record<string, unknown>` is the type predicate.
     - It tells TypeScript that if `isObject` returns `true`, then the `object` 
     parameter can safely be treated as a `Record<string, unknown>` (an object 
     with string keys and unknown values) in the code that follows.
  */
  return typeof object === 'object' && object !== null && !Array.isArray(object)
}

function findError<T extends object>(error: T): boolean {
  /**
   * it
   */
  if (Object.prototype.toString.call(error) === '[object Error]') {
    return true;
  }

  const prototype = Object.getPrototypeOf(error) as T | null;
  return prototype === null ? false : findError(prototype);
}

export function isShopifyError(error: unknown): error is ShopifyErrorLike {
  if (!isObject(error)) return false;

  if (error instanceof Error) return true;
  return findError(error);
}