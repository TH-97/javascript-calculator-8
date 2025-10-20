import { parseCustomDelimiter } from "../../features/checkDelimiter/index.js";
import { readInput } from "../../features/input/index.js";
import { promptOutput, resultOutput } from "../../features/output/index.js";
import { splitInput } from "../../features/splitInput/index.js";
import { sumNumber } from "../../features/sumNumber/index.js";
import { vaildateInput } from "../../features/validate/index.js";
export async function calculator() {
  await promptOutput();
  const input = await readInput();
  if (!vaildateInput(input)) {
    resultOutput(0);
    return;
  }
  const parsedInput = parseCustomDelimiter(input);

  const numbers = await splitInput(
    parsedInput.Input,
    parsedInput.DelimiterArray
  );

  const result = await sumNumber(numbers);
  resultOutput(result);
  return;
}
