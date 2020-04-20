import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("renders App Components", () => {
  test("renders footer", () => {
    render(<App />);
    expect(document.getElementById("footer-component")).toBeDefined();
  });
  test("renders navbar", () => {
    render(<App />);
    expect(document.getElementById("navbar-component")).toBeDefined();
  });
  test("renders banner", () => {
    render(<App />);
    expect(document.getElementById("banner-component")).toBeDefined();
  });
});
