import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText, getByLabelText } = render(<Root name="Testapp" />);
    expect(getByLabelText("Username")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });
  // TODO: more complex tests
});
