import { fireEvent, render } from "@testing-library/react";
import { TableFilters } from "../TableFilters";

describe("TableFilters", () => {
  it("should call onOrderChange when order button is clicked", () => {
    const onOrderChange = jest.fn();
    const { getByTestId } = render(
      <TableFilters
        inputValue=""
        onInputChange={() => {}}
        selectValue=""
        onSelectChange={() => {}}
        onOrderChange={onOrderChange}
        disabled={false}
      />
    );
    const button = getByTestId("sort-order");
    fireEvent.click(button);
    expect(onOrderChange).toHaveBeenCalled();
  });
});
