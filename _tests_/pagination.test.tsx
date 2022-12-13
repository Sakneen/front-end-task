import { render, screen } from "@testing-library/react";
import { SetStateAction } from "react";
import Pagination from "../components/pagination";

describe("Pagination component right button", () => {
    it("should render Pagination components correctly", () => {
        render(<Pagination homes={[]} current={[]} setPage={function (value: SetStateAction<String>): void {
            throw new Error("Function not implemented.");
        }} page={""} />);
        const element = screen.getByTestId('right')
        expect(element).toBeInTheDocument();
    });
});

describe("Pagination component left button", () => {
    it("should render Pagination components correctly", () => {
        render(<Pagination homes={[]} current={[]} setPage={function (value: SetStateAction<String>): void {
            throw new Error("Function not implemented.");
        }} page={""} />);
        const element = screen.getByTestId('left')
        expect(element).toBeInTheDocument()
    });
});