import "@testing-library/jest-dom";
import FilterById from "../src/components/filters/FilterById";
import { fireEvent, render, screen } from "@testing-library/react";

describe("FilterById component", () => {
  it("renders a component", () => {
    render(<FilterById filterId={() => {}} />);
    expect(screen.getByTestId("filterById")).toBeInTheDocument();
  });
  it("change values of filter input", () => {
    render(<FilterById filterId={() => {}} />);
    const input: any = screen.getByTestId("filterById");
    fireEvent.change(input, { target: { value: "C1-8-A" } });
    expect(input.value).toBe("C1-8-A");
  });
});
