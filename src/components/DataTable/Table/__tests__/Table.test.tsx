import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Table } from "../Table";

describe("Table", () => {
  const data = [
    {
      _id: "1",
      unit_id: "A101",
      unit_type: "Apartment",
      total_price: 1500000,
      for_sale: true,
      photos: ["http://example.com/image.jpg"],
      bua: 100,
    },
    {
      _id: "2",
      unit_id: "V101",
      unit_type: "Villa",
      total_price: 5000000,
      for_sale: false,
      photos: ["http://example.com/image.jpg"],
      bua: 300,
    },
  ];

  test("renders table with data", () => {
    render(<Table data={data} />);
    const unitIdColumn = screen.getByText("Unit ID");
    const unitTypeColumn = screen.getByText("Unit Type");
    const priceColumn = screen.getByText("Price");
    const buaColumn = screen.getByText("Build up area");
    const forSaleColumn = screen.getByText("For sale");
    const galleryColumn = screen.getByText("Gallery");

    expect(unitIdColumn).toBeInTheDocument();
    expect(unitTypeColumn).toBeInTheDocument();
    expect(priceColumn).toBeInTheDocument();
    expect(buaColumn).toBeInTheDocument();
    expect(forSaleColumn).toBeInTheDocument();
    expect(galleryColumn).toBeInTheDocument();

    const unitIdCells = screen.getAllByText(/A101|V101/);
    expect(unitIdCells.length).toBe(2);

    const unitTypeCells = screen.getAllByText(/Apartment|Villa/);
    expect(unitTypeCells.length).toBe(2);

    const priceCells = screen.getAllByText(/1.50M EGP|5.00M EGP/);
    expect(priceCells.length).toBe(2);

    const buaCells = screen.getAllByText(/100 m²|300 m²/);
    expect(buaCells.length).toBe(2);

    const forSaleCells = screen.getAllByText(/for sale|not for sale/);
    expect(forSaleCells.length).toBe(2);

    const galleryCells = screen.getAllByAltText("Property image preview");
    expect(galleryCells.length).toBe(2);
  });
});
