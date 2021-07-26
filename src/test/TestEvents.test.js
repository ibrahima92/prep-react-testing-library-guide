import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestEvents from "../components/TestEvents";

afterEach(cleanup);

it("increments counter", () => {
  const { getByTestId } = render(<TestEvents />);

  fireEvent.click(getByTestId("button-up"));

  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("decrements counter", () => {
  const { getByTestId } = render(<TestEvents />);

  fireEvent.click(getByTestId("button-down"));

  expect(getByTestId("counter")).toHaveTextContent("-1");
});