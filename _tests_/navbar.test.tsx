import { render, screen } from "@testing-library/react";
import Navbar from "../components/navbar";

describe("Pagination component right button", () => {
    it("should render Pagination components correctly", () => {
        render(<Navbar />)
        const element = screen.getByTestId('navbarDiv')
        expect(element).toBeInTheDocument();
    });
});