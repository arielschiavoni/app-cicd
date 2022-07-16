import { ComponentType, ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";

function Providers({ children }: { children: ReactNode }) {
  return (
    // add all providers here!
    <div>{children}</div>
  );
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) {
  return render(ui, { wrapper: Providers as ComponentType, ...options });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
