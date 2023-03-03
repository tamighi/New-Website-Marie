const createHeadersFromOptions = (options: RequestInit): Headers => {
  const requestHeaders = (options.headers ||
    new Headers({
      Accept: "application/json",
    })) as Headers;
  if (
    !requestHeaders.has("Content-Type") &&
    !(options && (!options.method || options.method === "GET")) &&
    !(options && options.body && options.body instanceof FormData)
  ) {
    requestHeaders.set("Content-Type", "application/json");
  }

  return requestHeaders;
};

export const httpClient = async (
  url: string,
  options: RequestInit = {}
): Promise<unknown | null> => {
  const headers = createHeadersFromOptions(options);
  return fetch(url, {
    ...options,
    headers: headers,
  })
    .then((resp) => {
      if (resp.ok) {
        if (resp.status === 200) {
          return resp.json;
        }
        return { status: resp.status };
      }
      return null;
    })
    .catch(() => null);
};
