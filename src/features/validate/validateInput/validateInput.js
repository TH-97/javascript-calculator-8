import { checkEmptyInput } from "./lib/checkEmptyInput.js";

export function vaildateInput(input) {
  if (!checkEmptyInput(input)) return { isValid: false, reason: "empty" };
}
