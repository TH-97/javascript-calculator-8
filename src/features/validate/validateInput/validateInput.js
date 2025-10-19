import { isEmpty } from "./lib/isEmpty.js";

export function vaildateInput(input) {
  if (isEmpty(input)) return false;
  return true;
}
