import { debounce } from "../debounce";

describe("debounce", () => {
  it("should call the provided function only once after the specified time has passed", async () => {
    const fn = jest.fn();
    const [debouncedFn, teardown] = debounce(fn, 100);

    debouncedFn("test");
    debouncedFn("test");
    debouncedFn("test");

    // After 50ms, the function should not have been called yet
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(fn).not.toHaveBeenCalled();

    // After 100ms, the function should have been called once
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(fn).toHaveBeenCalledTimes(1);

    teardown();
  });
});
