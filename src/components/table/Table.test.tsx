import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PropertyTable, { PropertyTableProps } from "./PropertyTable"; // adjust path if needed

describe("PropertyTable", () => {
  test("renders without crashing", () => {
    render(
      <PropertyTable
        rows={[]}
        sort="unit_id"
        order="asc"
        onSortChange={() => {}}
      />
    );
    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });
});

const demoRows = [
  {
    _id: "1",
    unit_id: "U101",
    unit_type: "villa",
    bua: 120,
    status: "Available",
    total_price: 250000,
    photos: ["https://via.placeholder.com/150"],
  },
  {
    _id: "2",
    unit_id: "U102",
    unit_type: "cottage",
    bua: 90,
    status: "Sold",
    total_price: 180000,
    photos: ["https://via.placeholder.com/150"],
  },
];

const defaultProps: PropertyTableProps = {
  rows: demoRows,
  sort: "unit_id",
  order: "asc",
  onSortChange: jest.fn(),
};

describe("PropertyTable component", () => {
  test("renders rows and opens photo popup", () => {
    render(<PropertyTable {...defaultProps} />);

    // Check if Unit IDs are visible
    expect(screen.getByText("U101")).toBeInTheDocument();
    expect(screen.getByText("U102")).toBeInTheDocument();

    // Click photo thumbnail
    const photoThumbnail = screen.getAllByRole("img")[0];
    fireEvent.click(photoThumbnail);

    // Popup should appear with the image
    expect(screen.getByAltText("Property")).toBeInTheDocument();
  });
});
