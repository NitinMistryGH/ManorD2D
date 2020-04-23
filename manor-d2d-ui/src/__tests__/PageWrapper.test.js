import React from "react";
import { render } from "@testing-library/react";
import PageWrapper from "../components/PageWrapper/PageWrapper";

describe("Renders PageWrapper Correctly", () => {
  test("renders children", () => {
    render(
      <PageWrapper>
        <h1>Test</h1>
      </PageWrapper>
    );

    expect(document.getElementById("page-wrapper-component").textContent).toBe(
      "Test"
    );
  });
});
