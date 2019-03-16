export interface SetupParams {
  browseWindow?: Window;
  modeKey?: string;
}

let browseWindow: Window | undefined;
let modeKey: string = "mode";

const IS_BROWSER = typeof window !== "undefined" && "HTMLElement" in window;

export const setup = (params: SetupParams) => {
  browseWindow = params.browseWindow || browseWindow;
  modeKey = params.modeKey || modeKey;
};

/**
 * @param mode query params key name
 */
export const isMode = (mode: string): boolean => {
  if (!IS_BROWSER) {
    return false;
  }
  browseWindow = !!browseWindow ? browseWindow : window;
  const params = new URLSearchParams(browseWindow.location.search);
  return params.get(modeKey) === mode;
};
