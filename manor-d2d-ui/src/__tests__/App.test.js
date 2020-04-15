import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("renders App Components", () => {
  test("renders navbar", () => {
    render(<App />);
    expect(document.getElementById("navbar-component")).toBeDefined();
  });
});
