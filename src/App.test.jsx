import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import App from "./App";

test("image is not in document upon initial render", () => {
  render(<App />);
  expect(screen.queryByAltText(/random/i)).not.toBeInTheDocument();
});

test("image is in document after search", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.type(screen.getByLabelText(/search/i), "cat");
  await user.click(screen.getByRole("button"));

  const img = await screen.findByAltText(/random cat/i);

  expect(img).toBeInTheDocument();
});
