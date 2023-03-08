import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders the Footer component", () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders the copyright text", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText("©2023 Sakneen Inc. All rights reserved.")
    ).toBeInTheDocument();
  });
});
