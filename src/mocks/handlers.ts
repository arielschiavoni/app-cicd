import { graphql } from "msw";

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  // default handler for HelloWorld query
  graphql.query("HelloWorld", (_req, res, ctx) => {
    return res(ctx.data({ message: "hello" }));
  }),
];
