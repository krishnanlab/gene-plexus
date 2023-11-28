import { api, request } from "@/api";

// eslint-disable-next-line
export type Test = typeof import("../../fixtures/test.json");

/** fake api call */
export const test = async () => {
  const response = await request<Test>(api + "/test");
  const transformed = response.reverse();
  return transformed;
};
