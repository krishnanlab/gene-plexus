import { api, request } from "@/api";
import { sleep } from "@/util/misc";

// eslint-disable-next-line
export type Test = typeof import("../../fixtures/test.json");

/** fake api call */
export const test = async () => {
  /** simulate network/processing/whatever delay */
  await sleep(3000);
  /** get data */
  const response = await request<Test>(api + "/test");
  /** make one-time transformations UI needs */
  const transformed = response.reverse();
  /** return transformed data */
  return transformed;
};
