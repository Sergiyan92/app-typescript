import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { User } from "./App.types";
const user: User = {
  id: 1,
  name: "Ben",
  email: "mail@example.com",
};
test("renders learn react link", () => {
  render(<App user={user} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
