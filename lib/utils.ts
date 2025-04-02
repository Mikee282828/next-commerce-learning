export function ensureStartWith(check: string, start: string) {
  return check.startsWith(start) ? check : `${start}${check}`;
}