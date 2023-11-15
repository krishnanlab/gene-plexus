import { api, request } from "@/api";

export type Test = typeof import("../../fixtures/test.json");

/** fake api call */
export const test = async () => {
  const response = await request<Test>(api + "/test");
  const transformed = response.reverse();
  return transformed;
};
