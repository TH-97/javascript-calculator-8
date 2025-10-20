import { Delimiters } from "../../../entities/delimiter/index.js";
import { customError } from "../../../shared/error/index.js";

export function parseCustomDelimiter(input) {
  const startMarker = input.indexOf("//");
  const endMarker = input.indexOf("\\n");

  const delimiterManager = new Delimiters();
  let inputString = input;

  if (
    (startMarker === -1 && endMarker !== -1) ||
    (startMarker === 0 && endMarker === -1)
  ) {
    customError();
  }

  if (startMarker === 0 && endMarker !== -1) {
    const customDelimiter = input.slice(startMarker + 2, endMarker - 1);
    delimiterManager.addCustumDelimiter(customDelimiter);
    inputString = input.slice(endMarker + 2);
  }

  return {
    DelimiterArray: delimiterManager.getDelimiterArray(),
    Input: inputString,
  };
}
