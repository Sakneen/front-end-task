import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { NavBar } from "../NavBar";

describe("NavBar", () => {
  it("renders the NavBar component", () => {
    const { getByRole } = render(<NavBar />);
    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the RoofingIcon component", () => {
    const { getByLabelText } = render(<NavBar />);
    expect(getByLabelText("Company logo - To home page")).toBeInTheDocument();
    expect(
      getByLabelText("Company logo - To home page").querySelector("svg")
    ).toBeInTheDocument();
  });
});
