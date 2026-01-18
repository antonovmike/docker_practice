import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CheatSheet from "../CheatSheet";

test("renders Cheat Sheet text", () => {
  render(
    <MemoryRouter>
      <CheatSheet />
    </MemoryRouter>,
  );
  expect(
    screen.getByText(/Docker Quick Commands Cheat Sheet/i),
  ).toBeInTheDocument();
});
