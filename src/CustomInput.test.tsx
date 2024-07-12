import { fireEvent, render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import React from "react";
import CustomInput from "./CustomInput";

describe("When everything id OK", () => {
  test("should call the onChange callback handler when using the fireEvent function", async () => {
    const onChange = jest.fn();
    render(
      <CustomInput value="" onChange={onChange}>
        Input:
      </CustomInput>
    );
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Aman" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test("should call the onChange callback handler when using the userEvent API", async () => {
    const onChange = jest.fn();
    render(
      <CustomInput value="" onChange={onChange}>
        Input:
      </CustomInput>
    );

    userEvent.type(screen.getByRole("textbox"), "Aman");

    expect(onChange).toHaveBeenCalledTimes(4);
  });
});
