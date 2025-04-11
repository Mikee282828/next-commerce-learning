import { ReadonlyURLSearchParams } from "next/navigation";

export function ensureStartWith(check: string, start: string) {
  return check.startsWith(start) ? check : `${start}${check}`;
}

export function createUrl(
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
}
