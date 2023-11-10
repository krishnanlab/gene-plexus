/** wait ms */
export async function sleep(ms = 0): Promise<void> {
  return new Promise((resolve) => globalThis.setTimeout(resolve, ms));
}
