import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);
    //screen.debug();

    const h1 = container.querySelector("h1");
    const h2 = container.querySelector("h2");

    // expect(h1?.innerHTML).toBe("Deivi");
    expect(h1?.innerHTML).toContain("Deivi");
    expect(h2?.innerHTML).toContain("Gonzalez");
  });

  test("should render firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    // const h1 = screen.getByRole("heading", {
    //   level: 1,
    // });

    const h1 = screen.getByTestId("first-name-title");
    expect(h1.innerHTML).toContain("Deivi");
  });

  test('should match snapshot', () => {

    const {container} = render(<MyAwesomeApp/>)

    expect(container).toMatchSnapshot()


  })



});
