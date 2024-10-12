import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Sum } from "./Sum";

describe("Sum", () => {
  it("displays the label and text input for number1 and number2", () => {
    render(<Sum />);

    expect(screen.getByText(/number1/i)).toBeInTheDocument();
    expect(screen.getByText(/number2/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Calcular" })
    ).toBeInTheDocument();

    expect(screen.getByText("Results: 0")).toBeInTheDocument();
  });

  it("calculates the sum of number1 and number2", () => {
    // Arrange
    render(<Sum />);

    // Act
    userEvent.type(screen.getByLabelText(/number1/i), "22");
    userEvent.type(screen.getByLabelText(/number2/i), "4");
    userEvent.click(screen.getByRole("button", { name: "Calcular" }));

    // Assert
    expect(screen.getByText("Results: 26")).toBeInTheDocument();
  });
});
