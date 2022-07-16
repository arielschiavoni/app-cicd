import { graphql } from "msw";
import { App } from "./App";
import { server } from "./mocks/server";
import { render, screen } from "./test/utils";

test("renders headline", () => {
  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent("Vite + React");
});

test("msw", () => {
  // change mocked resposnse for the HelloWorld query!
  server.use(
    graphql.query("HelloWorld", (_req, res, ctx) => {
      return res(ctx.data({ message: "bey!" }));
    })
  );

  render(<App />);

  expect(screen.getByRole("heading")).toHaveTextContent("Vite + React");
});
