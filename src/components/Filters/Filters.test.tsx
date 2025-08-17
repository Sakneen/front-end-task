import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Filters } from "./Filters";

const mockSetSearch = jest.fn();
const mockSetSortField = jest.fn();
const mockSetSortOrder = jest.fn();
const mockSetStatusFilters = jest.fn();
const mockSetUnitType = jest.fn();

const defaultProps = {
  search: "",
  setSearch: mockSetSearch,
  sortField: "unit_id" as const,
  setSortField: mockSetSortField,
  sortOrder: "asc" as const,
  setSortOrder: mockSetSortOrder,
  statusFilters: [],
  setStatusFilters: mockSetStatusFilters,
  unitType: [],
  setUnitType: mockSetUnitType,
};

describe("Filters component", () => {
  test("renders filters and selects Available status", () => {
    render(<Filters {...defaultProps} />);

    // Open status dropdown
    const statusButton = screen.getByText("Statuses");
    fireEvent.click(statusButton);

    // Click "Available" checkbox
    const availableCheckbox = screen.getByLabelText("Available");
    fireEvent.click(availableCheckbox);

    // Check mock function called
    expect(mockSetStatusFilters).toHaveBeenCalledWith(["Available"]);
  });
});
