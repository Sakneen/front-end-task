import { render, screen } from "@testing-library/react";
import Dashboard from "../components/dashboard";

describe("Pagination component right button", () => {
    it("should render Pagination components correctly", () => {
        render(<Dashboard />)
        const element = screen.getByTestId('dashboard')
        expect(element).toBeInTheDocument();
    });
});