import { http, HttpResponse, passthrough } from "msw";
import test from "./test.json";

/** api calls to be mocked with fixture data */
export const handlers = [
  http.get("*/test", () => HttpResponse.json(test)),

  /** any other request */
  http.get(/.*/, ({ request }) => {
    const { pathname } = new URL(request.url);
    /** only clutter log if not an asset like .jpg or .woff2 */
    if (!pathname.match(/\.[A-Za-z0-9]{2,5}$/))
      console.warn("Non-mocked request", pathname);
    return passthrough();
  }),
];
