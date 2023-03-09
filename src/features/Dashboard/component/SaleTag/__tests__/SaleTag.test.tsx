import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SaleTag } from "../SaleTag";

describe("SaleTag component", () => {
  it("renders the correct text when forSale prop is true", () => {
    const { getByText } = render(<SaleTag forSale={true} />);
    const tagElement = getByText("for sale");
    expect(tagElement).toBeInTheDocument();
  });

  it("renders the correct text when forSale prop is false", () => {
    const { getByText } = render(<SaleTag forSale={false} />);
    const tagElement = getByText("not for sale");
    expect(tagElement).toBeInTheDocument();
  });

  it("renders with the correct background color when forSale prop is true", () => {
    const { getByText } = render(<SaleTag forSale={true} />);
    const tagElement = getByText("for sale");
    expect(tagElement).toHaveStyle({
      backgroundColor: "#1976d2",
    });
  });

  it("renders with the correct background color when forSale prop is false", () => {
    const { getByText } = render(<SaleTag forSale={false} />);
    const tagElement = getByText("not for sale");
    expect(tagElement).toHaveStyle({
      backgroundColor: "gray",
    });
  });
});
