import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Layout } from "../Layout";

describe("Layout", () => {
  it("renders children, navbar, and footer", () => {
    const { getByRole, getByLabelText, getByText } = render(
      <Layout>
        <div>Child component</div>
      </Layout>
    );

    expect(getByRole("navigation")).toBeInTheDocument();
    expect(getByLabelText("Company logo - To home page")).toBeInTheDocument();
    expect(getByRole("main")).toHaveTextContent("Child component");
    expect(getByRole("contentinfo")).toBeInTheDocument();
    expect(getByText(/Sakneen Inc/)).toBeInTheDocument();
  });
});
