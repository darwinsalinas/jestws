import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Fetch from "./Fetch";

it("loads and displays greeting", async () => {
  // ARRANGE
  render(<Fetch url="/greeting" />);

  // ACT
  //   await userEvent.click(screen.getByText("Load Greeting"));
  await userEvent.click(
    await screen.findByRole("heading", { name: "Load Greeting" })
  );

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button", { name: "saludar" })).toBeDisabled();
});
