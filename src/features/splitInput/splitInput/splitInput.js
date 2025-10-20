import { delimiterError } from "../../../shared/error/index.js";

export function splitInput(input, delimiterArray) {
  if (!delimiterArray.some((delimiter) => input.includes(delimiter))) {
    delimiterError();
  }
  for (const delimiter of delimiterArray) {
    input = input.replaceAll(delimiter, " ");
  }
  return input.split(" ");
}
