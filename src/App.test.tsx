import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import { getUser } from "./getUser";
import { mocked } from "jest-mock";
import userEvent from "@testing-library/user-event";

jest.mock("./getUser");

const mockGetUser = mocked(getUser, true);

describe("When everything is OK", () => {
  beforeEach(async () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
  });

  test("should render the App component without crashing", () => {
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test("should select the children that is being passed to the CustomInput component", () => {
    screen.getAllByText("Search");
    screen.getAllByText(/Search/); // regular expression
    // expect(screen.getAllByText("Search")).toBeInTheDocument();
  });

  test("should select the input element by its role", () => {
    screen.getAllByRole("textbox");
    expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("textbox").length).toBe(1);
  });

  test("should select a label element by its text", () => {
    screen.getByLabelText("Search");
  });

  test("should select input element by placeholder text", () => {
    screen.getAllByPlaceholderText("Example");
  });

  test("should not find the role 'whatever' in our component", () => {
    expect(screen.queryByRole("whatever")).toBeNull();
  });
});

describe("When the component fetches the user successfully", () => {
  beforeEach(() => {
    mockGetUser.mockClear();
  });

  test("should call the getUser once", async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1));
  });

  test("should render the username passed", async () => {
    const name = "Aman";
    mockGetUser.mockResolvedValueOnce({ id: "1", name });
    render(<App />);
    expect(screen.queryByText(/Username/)).toBeNull();
    expect(await screen.findByText(/Username/)).toBeInTheDocument();
    expect(await screen.findByText(`Username: ${name}`)).toBeInTheDocument();
  });
});

describe("When the user enters some text in the input element", () => {
  test("should display the text in the screen", async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());

    expect(screen.getByText(/You typed:/)).toBeInTheDocument();
    userEvent.type(screen.getByRole("textbox"), "Singh");
    expect(screen.getByText(/You typed: Singh/)).toBeInTheDocument();
  });
});
