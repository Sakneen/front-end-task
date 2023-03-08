import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ImagePreview } from "../ImagePreview";

describe("ImagePreview", () => {
  it("renders an image when imgSrc is provided", () => {
    const imgSrc = "https://example.com/image.jpg";
    const { getByRole, getByAltText } = render(
      <ImagePreview imgSrc={imgSrc} />
    );

    expect(getByRole("button")).toBeInTheDocument(); // Button should be present
    expect(getByAltText("Property image preview")).toHaveAttribute(
      "src",
      imgSrc
    ); // Image should be present and have correct src attribute
  });

  it("does not render an image when imgSrc is not provided", () => {
    const { queryByRole } = render(<ImagePreview />);

    expect(queryByRole("button")).not.toBeInTheDocument(); // Button should not be present
  });
});
