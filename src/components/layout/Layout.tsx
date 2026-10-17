import type { Component, JSX } from "solid-js";
import "./Layout.css";

export const Layout: Component<{ children: JSX.Element }> = (props) => <div class="Layout">{props.children}</div>;

export const LayoutSection: Component<{ children: JSX.Element; full?: boolean; narrow?: boolean }> = (props) => (
  <section
    class="layout-section"
    classList={{
      "layout-section--full": props.full,
    }}
  >
    <div
      class="layout-content"
      classList={{
        "layout-content--narrow": props.narrow,
      }}
    >
      {props.children}
    </div>
  </section>
);

export const LayoutSeparator: Component = () => <div class="layout-separator" />;
