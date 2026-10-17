import type { Component, JSX } from "solid-js";
import "./Grid.css";

export const Grid: Component<{ children: JSX.Element; columns?: number }> = (props) => {
  return (
    <div class="Grid" style={{ "--grid-columns": props.columns ?? 1 }}>
      {props.children}
    </div>
  );
};
