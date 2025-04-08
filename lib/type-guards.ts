
export interface ShopifyErrorLike {
  status: number;
  message: Error;
  cause: Error;
}

export function isObject(object: unknown): object is Record<string, unknown> {  // istead of returning boolean it returns wheter object is or is not a Record<string,unknown>
  return typeof object === 'object' && object !== null && !Array.isArray(object)
}

function findError<T extends object>(error : T) : boolean{
  if(Object.prototype.toString.call(error) === '[object error]'){
    return true;
  }

  const prototype = Object.getPrototypeOf(error) as T | null;
  return prototype === null ? false : findError(prototype);
}

export function isShopifyError(error: unknown): error is ShopifyErrorLike {
  if (!isObject(error)) return false;

  if(error instanceof Error) return true;
  return findError(error);
}