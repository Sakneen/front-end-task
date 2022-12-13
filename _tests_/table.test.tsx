import { render, screen } from "@testing-library/react";
import Table from "../components/table";

describe("Pagination component right button", () => {
    it("should render Pagination components correctly", () => {
        render(<Table homes={[]} />)
        const element = screen.getByRole('table')
        expect(element).toBeInTheDocument();
    });
});