import { groupLog } from "@/util/debug";

/** base api url */
export const api = "http://localhost:8000";

type Param = string | number | boolean | undefined | null;
export type Params = { [key: string]: Param | Param[] };

/** generic fetch request wrapper */
export const request = async <Response>(
  /** request path */
  path = "",
  /**
   * key/value object for url parameters
   *
   * e.g. { ids: [1,2,3], sort: "asc" } -> ?ids=1,2,3&sort=asc
   */
  params: Params = {},
  /** fetch options */
  options: RequestInit = {},
  /** parse response mode */
  parse: "text" | "json" = "json",
): Promise<Response> => {
  /** get string of url parameters */
  const paramsObject = new URLSearchParams();
  for (const [key, value] of Object.entries(params))
    paramsObject.append(key, [value].flat().join(","));

  /** assemble url to query */
  const url = path + "?" + paramsObject.toString();

  /** make request object */
  const request = new Request(url, options);

  if (import.meta.env.MODE !== "test")
    groupLog(`📞 Request ${path}`, {
      url,
      params,
      options,
      request,
    });

  /* make new request */
  const response = await fetch(request);

  /** capture error for throwing later */
  let error = "";

  /** check response code */
  if (!response.ok) error = `Response not OK`;

  /** parse response */
  let parsed: Response | undefined;
  try {
    parsed =
      parse === "text"
        ? await response.clone().text()
        : await response.clone().json();
  } catch (e) {
    error = `Couldn't parse response as ${parse}`;
  }

  if (import.meta.env.MODE !== "test")
    groupLog(`📣 Response ${path}`, {
      url,
      params,
      options,
      parsed,
      response,
    });

  /** throw error after details have been logged */
  if (error || parsed === undefined) throw Error(error);

  return parsed;
};
