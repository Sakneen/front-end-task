import SortByUnit from "../src/components/filters/SortByUnit";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SortByUnit component", () => {
  it("renders a component", () => {
    render(<SortByUnit sortUnit={() => {}} />);
    expect(screen.getByTestId("sortByUnit")).toBeInTheDocument();
  });
  it("change values of select-sort", () => {
    render(<SortByUnit sortUnit={() => {}} />);
    const select:any = screen.getByTestId("sortByUnit");
    fireEvent.change(select, { target: { value: "unit_type" } });
    expect(select?.value).toBe('unit_type')
  });
});
