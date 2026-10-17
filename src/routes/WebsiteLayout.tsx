import type { JSXElement } from "solid-js";
import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import { LayoutSection, LayoutSeparator } from "~/components/layout/Layout";

export function WebsiteLayout(props: { children: JSXElement }) {
  return (
    <>
      <LayoutSection narrow>
        <Header />
      </LayoutSection>
      <LayoutSeparator />
      {props.children}
      <LayoutSeparator />
      <LayoutSection narrow>
        <Footer />
      </LayoutSection>
    </>
  );
}
