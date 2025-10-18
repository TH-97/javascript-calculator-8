import { Console } from "@woowacourse/mission-utils";

export async function readInput() {
  const input = await Console.readLineAsync("");
  return input;
}
