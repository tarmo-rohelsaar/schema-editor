import { TanStackDevtools } from "@tanstack/solid-devtools";
import { FormDevtools } from "@tanstack/solid-form-devtools";
import { HotkeysDevtoolsPanel } from "@tanstack/solid-hotkeys-devtools";
import { PacerDevtoolsPanel } from "@tanstack/solid-pacer-devtools";
import { SolidQueryDevtoolsPanel } from "@tanstack/solid-query-devtools";
import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/solid-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/solid-router-devtools";
import { AppPage } from "~/routes/AppPage";
import { IndexPage } from "~/routes/IndexPage";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackDevtools
        config={{ hideUntilHover: false, defaultOpen: true }}
        eventBusConfig={{ debug: true }}
        plugins={[
          {
            name: "Router",
            render: <TanStackRouterDevtoolsPanel />,
            defaultOpen: true,
          },
          {
            name: "Query",
            render: <SolidQueryDevtoolsPanel />,
            defaultOpen: true,
          },
          {
            name: "Form",
            render: <FormDevtools devtoolsOpen={true} theme="dark" />,
            defaultOpen: true,
          },
          {
            name: "Hotkeys",
            render: <HotkeysDevtoolsPanel />,
            defaultOpen: true,
          },
          {
            name: "Pacer",
            render: <PacerDevtoolsPanel />,
            defaultOpen: true,
          },
        ]}
      />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/app",
  component: AppPage,
});

const routeTree = rootRoute.addChildren([indexRoute, appRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}
