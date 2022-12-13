import { render, screen } from "@testing-library/react";
import { SetStateAction } from "react";
import Pagination from "../pagination";

describe("Pagination component", () => {
    it("should render Pagination component correctly", () => {
        render(<Pagination homes={[]} current={[]} setPage={function (value: SetStateAction<String>): void {
            throw new Error("Function not implemented.");
        }} page={""} />);
        const element = screen.queryByRole('#__next > div > main > div:nth-child(2) > div:nth-child(2) > div:nth-child(4)')
        expect(element).toBeInTheDocument();
    });
});