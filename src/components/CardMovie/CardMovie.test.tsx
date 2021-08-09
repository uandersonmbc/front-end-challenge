import { render, screen } from "@testing-library/react";

import { Card } from "components";

describe("CardMovie", () => {
  it("renders correctly", () => {
    const props = {
      title: "Movie Title",
      image: "/image.jpg",
      releaseDate: "2018-01-01",
      percent: 7.8,
      cdn: "",
    };
    render(
      <div>
        <Card {...props} />
      </div>
    );

    expect(screen.getByText(props.title)).toBeInTheDocument();

    expect(screen.getByText(props.percent.toString())).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img.getAttribute("src")).toMatch(props.image);
  });
});
