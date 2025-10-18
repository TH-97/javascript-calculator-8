import { readInput } from "../../features/input/index.js";
import {
  promptOutput,
  outputValidationError,
} from "../../features/output/index.js";
import { vaildateInput } from "../../features/validate/index.js";
export async function calculator() {
  await promptOutput();
  const input = await readInput();
  if (!vaildateInput(input).isValid) {
    const reason = vaildateInput(input).reason;
    outputValidationError(reason);
    return;
  }
}
