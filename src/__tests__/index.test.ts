jest.unmock("../index");
import { JSDOM } from "jsdom";
import { isMode, setup, SetupParams } from "../index";

const generateSetupParams = (search: string, modeKey?: string): SetupParams => {
  const browseWindow: Window = {
    // @ts-ignore
    location: {
      search,
    },
    HTMLElement: () => undefined,
  };
  return { browseWindow, modeKey };
};

describe("mode", () => {
  beforeAll(() => {
    setup(generateSetupParams("", "mode"));
  });

  it("'mode' pattern", () => {
    setup(generateSetupParams("?mode=a"));
    expect(isMode("a")).toBe(true);
    expect(isMode("b")).toBe(false);
    setup(generateSetupParams("?mode=b"));
    expect(isMode("a")).toBe(false);
    expect(isMode("b")).toBe(true);
    setup(generateSetupParams("?mode=b&mode=a"));
    expect(isMode("a")).toBe(false);
    expect(isMode("b")).toBe(true);
  });

  it("Change 'mode' key", () => {
    setup(generateSetupParams("?mymode=a", "mymode"));
    expect(isMode("a")).toBe(true);
    expect(isMode("b")).toBe(false);
    setup(generateSetupParams("?mymode=b", "mymode"));
    expect(isMode("a")).toBe(false);
    expect(isMode("b")).toBe(true);
  });

  it("Not browser", () => {
    const { window: browseWindow } = new JSDOM("");
    delete browseWindow.HTMLElement;
    setup({ browseWindow });
    expect(isMode("a")).toBe(false);
    expect(isMode("b")).toBe(false);
  });

  it("Not set query params", () => {
    setup(generateSetupParams(""));
    expect(isMode("a")).toBe(false);
    expect(isMode("b")).toBe(false);

    setup(generateSetupParams("?"));
    expect(isMode("a")).toBe(false);
    expect(isMode("b")).toBe(false);
  });
});
