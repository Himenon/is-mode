const SearchParams = require("@ungap/url-search-params");

export interface SetupParams {
  browseWindow?: Window;
  modeKey?: string;
}

let browseWindow: Window | undefined;
let modeKey: string = "mode";

const IS_BROWSER = typeof window !== "undefined" && "HTMLElement" in window;

if (IS_BROWSER) {
  browseWindow = window;
}

export const setup = (params: SetupParams) => {
  browseWindow = params.browseWindow || browseWindow;
  modeKey = params.modeKey || modeKey;
};

/**
 * @param mode query params key name
 */
export const isMode = (mode: string): boolean => {
  if (!browseWindow) {
    return false;
  }
  const params = new SearchParams(browseWindow.location.search);
  return params.get(modeKey) === mode;
};
