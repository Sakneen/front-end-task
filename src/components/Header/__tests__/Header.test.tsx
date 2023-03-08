import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../Header";

describe("Header", () => {
  it("renders the Header component", () => {
    const { getByRole } = render(<Header />);
    expect(getByRole("banner")).toBeInTheDocument();
  });

  it("renders the Dashboard title", () => {
    const { queryAllByText } = render(<Header />);
    expect(queryAllByText("Dashboard")).toBeDefined();
  });

  it("renders the Breadcrumbs component", () => {
    const { getByRole } = render(<Header />);
    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the Home icon", () => {
    const { getByLabelText } = render(<Header />);
    expect(getByLabelText("Home")).toBeInTheDocument();
  });

  it("renders the NavigateNext icon", () => {
    const { getByLabelText } = render(<Header />);
    expect(getByLabelText("Navigate next")).toBeInTheDocument();
  });
});
