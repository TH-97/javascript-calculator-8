import { readInput } from "../../features/input/index.js";
import { promptOutput, resultOutput } from "../../features/output/index.js";
import { vaildateInput } from "../../features/validate/index.js";
export async function calculator() {
  await promptOutput();
  const input = await readInput();
  if (!vaildateInput(input)) {
    resultOutput(0);
    return;
  }
}
