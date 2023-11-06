/** wait ms */
export async function sleep(ms = 0): Promise<void> {
  return new Promise((resolve) => globalThis.setTimeout(resolve, ms));
}

/** wait for element matching selector to appear, checking periodically */
export async function waitFor<El extends Element>(
  selector: string,
): Promise<El | undefined> {
  const waits = [
    0, 1, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 1000, 2000, 3000,
  ];
  while (waits.length) {
    const match = document.querySelector<El>(selector);
    if (match) return match;
    await sleep(waits.shift());
  }
}

/** scroll to element by selector */
export async function scrollTo(selector: string) {
  /** wait for element to appear */
  const element = await waitFor(selector);
  if (!element) return;

  /** wait for layout shifts */
  await sleep(100);

  /** scroll to element */
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY,
    behavior: "smooth",
  });
}
