import { Console } from "@woowacourse/mission-utils";

export function outputValidationError(reason) {
  if (reason === "empty") {
    Console.print("결과값 : 0");
  }
}
