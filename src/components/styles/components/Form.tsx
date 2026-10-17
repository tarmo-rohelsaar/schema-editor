import type { FieldStore } from "@formisch/solid";
import { type Component, Show } from "solid-js";
import { Index } from "solid-js/web";

export const FormFieldErrors: Component<{ errors: FieldStore["errors"] }> = (props) => (
  <Index each={props.errors}>{(error) => <div class="filed-error">{error()}</div>}</Index>
);
export const FormError: Component<{ error: string | null }> = (props) => (
  <Show when={props.error}>
    {(_) => (
      <div
        style={{
          padding: "2",
          "background-color": "red",
          "margin-bottom": "4px",
          "border-color": "red.7",
          "border-width": "1px",
          "border-radius": "sm",
        }}
      >
        {_()}
      </div>
    )}
  </Show>
);
