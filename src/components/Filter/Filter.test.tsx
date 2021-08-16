import { act, render } from "@testing-library/react";
import axios from "services/api";
const mockedAxios = axios as jest.Mocked<typeof axios>;

import Filter from "./Filter";

describe("Filter", () => {
  it("renders", () => {
    const search = jest.fn();

    mockedAxios.get.mockImplementation((url) => {
      switch (url) {
        case "/api/genres":
          return Promise.resolve({ data: [] });
        case "/api/movies":
          return Promise.resolve({ data: [] });
        default:
          return Promise.reject(new Error("not found"));
      }
    });

    render(<Filter locale="en-US" search={search} />);
  });
});
