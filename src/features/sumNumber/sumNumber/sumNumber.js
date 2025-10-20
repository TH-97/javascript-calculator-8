import { NumberArray } from "../../../entities/number/index.js";
import { numberError } from "../../../shared/error/index.js";

export function sumNumber(numberArray) {
  const array = new NumberArray();
  numberArray.forEach((number) => {
    if (!array.isNumber(number)) numberError();
    array.addNumber(number);
  });
  return array.getSum();
}
