import { types } from "@babel/core";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "services/api";
import { storedGenres } from "utils/storage";

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedStorage = storedGenres as jest.Mocked<typeof storedGenres>;

import Filter from "./Filter";

jest.mock("utils/storage");

describe("Filter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders", async () => {
    const search = jest.fn();

    const genres = [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
    ];

    mockedStorage.get.mockReturnValue([]);
    mockedAxios.get.mockResolvedValue({ data: genres });

    render(<Filter locale="en-US" search={search} />);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(
        screen.queryByRole("button", { name: genres[0].name })
      ).toBeTruthy();
    });
    expect(screen.queryByRole("button", { name: genres[1].name })).toBeTruthy();
    expect(screen.queryByRole("button", { name: genres[2].name })).toBeTruthy();
    expect(search).toHaveBeenCalledTimes(1);
    expect(search).toHaveBeenCalledWith([], 1, true);
  });

  it("handles filter change", async () => {
    const search = jest.fn();

    const genres = [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
    ];

    mockedStorage.get.mockReturnValue([28]);
    mockedAxios.get.mockResolvedValue({ data: genres });

    render(<Filter locale="en-US" search={search} />);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(
        screen.queryByRole("button", { name: genres[0].name })
      ).toBeTruthy();
    });
    expect(screen.queryByRole("button", { name: genres[1].name })).toBeTruthy();
    expect(screen.queryByRole("button", { name: genres[2].name })).toBeTruthy();
    expect(screen.queryByRole("button", { name: genres[0].name })).toHaveClass(
      "btnCheck"
    );
    expect(search).toHaveBeenCalledTimes(1);
    expect(search).toHaveBeenCalledWith([28], 1, true);
  });

  it("handles filter change with multiple filters", async () => {
    const search = jest.fn();

    const genres = [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
    ];

    mockedStorage.get.mockReturnValue([28, 12]);
    mockedAxios.get.mockResolvedValue({ data: genres });

    render(<Filter locale="en-US" search={search} />);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(
        screen.queryByRole("button", { name: genres[0].name })
      ).toBeTruthy();
    });
    expect(screen.queryByRole("button", { name: genres[1].name })).toBeTruthy();
    expect(screen.queryByRole("button", { name: genres[2].name })).toBeTruthy();
    expect(screen.queryByRole("button", { name: genres[0].name })).toHaveClass(
      "btnCheck"
    );
    expect(screen.queryByRole("button", { name: genres[1].name })).toHaveClass(
      "btnCheck"
    );
    expect(search).toHaveBeenCalledTimes(1);
    expect(search).toHaveBeenCalledWith([28, 12], 1, true);
  });

  it("", async () => {
    const search = jest.fn();

    const genres = [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
    ];

    mockedStorage.get.mockReturnValue([28, 12]);
    mockedAxios.get.mockResolvedValue({ data: genres });

    render(<Filter locale="en-US" search={search} />);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(
        screen.queryByRole("button", { name: genres[0].name })
      ).toBeTruthy();
    });

    const genreSelected = screen.getByRole("button", {
      name: genres[1].name,
    });

    fireEvent.click(genreSelected);
    expect(mockedStorage.set).toHaveBeenCalledTimes(1);
    expect(mockedStorage.set).toHaveBeenCalledWith([28]);

    fireEvent.click(genreSelected);
    expect(mockedStorage.set).toHaveBeenCalledTimes(2);
    expect(mockedStorage.set).toHaveBeenCalledWith([28, 12]);

    const clearButton = screen.getByRole("button", {
      name: "Clear",
    });
    fireEvent.click(clearButton);
    expect(mockedStorage.clear).toHaveBeenCalledTimes(1);

    const searchButton = screen.getByRole("button", {
      name: "Search",
    });
    fireEvent.click(searchButton);
    expect(search).toHaveBeenCalledTimes(2);
  });
});
