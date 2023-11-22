import { sleep } from "@/util/misc";

/** wait for element matching selector to appear, checking periodically */
export const waitFor = async <El extends Element>(
  selector: string,
): Promise<El | undefined> => {
  const waits = [
    0, 1, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 1000, 2000, 3000,
  ];
  while (waits.length) {
    const match = document.querySelector<El>(selector);
    if (match) return match;
    await sleep(waits.shift());
  }
};

/** scroll to element by selector */
export const scrollTo = async (selector: string) => {
  /** wait for element to appear */
  const element = await waitFor(selector);
  if (!element) return;

  /** wait for layout shifts */
  await sleep(100);

  /** scroll to element */
  element.scrollIntoView({ behavior: "smooth" });
};

/** restart animations on element */
export const restartAnimations = (element: Element): void => {
  for (const animation of document.getAnimations()) {
    if (element.contains((animation.effect as KeyframeEffect).target)) {
      animation.cancel();
      animation.play();
    }
  }
};
