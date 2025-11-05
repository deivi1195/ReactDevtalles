import { afterAll, afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart.tsx/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shopping-cart.tsx/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid="ItemCounter"
//       productName={props.productName}
//       quantity={props.quantity}
//     />
//   ),
// }));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const ItemCounters = screen.getAllByTestId("ItemCounter");

    expect(ItemCounters.length).toBe(3);

    //screen.debug();
  });

  test("should render ItemCunter with correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Gorra",
      quantity: 2,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Camisa",
      quantity: 3,
    });

    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Llavero",
      quantity: 8,
    });
  });
});
