import type { Component, JSX } from "solid-js";
import "./Flex.css";
/*
  display
  gap
  margin
  padding
 */
export const Flex: Component<{ children: JSX.Element; gap?: number }> = (props) => {
  return (
    <div class="flex" style={{ gap: `var(--layout-spacing-spacer-${[props.gap ?? 0]})` }}>
      {props.children}
    </div>
  );
};
