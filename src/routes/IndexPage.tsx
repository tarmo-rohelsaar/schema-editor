import { Link } from "@tanstack/solid-router";
import { BsArrowRight } from "solid-icons/bs";
import { Grid } from "~/components/layout/Grid";
import { LayoutSection } from "~/components/layout/Layout";
import { WebsiteLayout } from "~/routes/WebsiteLayout";

export function IndexPage() {
  return (
    <WebsiteLayout>
      <LayoutSection>
        <hgroup>
          <h1 class="text-h1">Web Project Components</h1>
          <p class="text-large">Headless, Lightweight Components with Themes</p>
        </hgroup>

        <div>
          <Link class="button" to="/app">
            Documentation <BsArrowRight />
          </Link>
        </div>
      </LayoutSection>

      <LayoutSection>
        <h2 class="text-h2">Why Guvam UI Library?</h2>

        <Grid columns={3}>
          <div class="card">
            <div class="card-content">
              <div class="text-prose">
                <h3 class="text-h3">Developer Experience</h3>
                <p class="text-default">
                  <b class="text-bold">Separation of concerns</b>: Interactivity, content and styles are completely
                  separated, allowing for easy code reusability.
                </p>
                <p class="text-default">
                  <b class="text-bold">Statically analyzable</b>: Automatically improves webpage load times and user
                  interface speed.
                </p>
                <p class="text-default">
                  <b class="text-bold">Code generation</b>: generate templates into many supported formats, including
                  React, Vue, Liquid, WordPress, Smarty, Blade, Django, PHP, and Ruby on Rails. Generate CSS into CSS
                  Modules (Styled Components, Emotion, StyleX) Tailwind and SCSS
                </p>
                <p class="text-default">
                  <b class="text-bold">Accessibility</b>: W3C-compliant components
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="text-prose">
                <h3 class="text-h3">Designer Experience</h3>
                <p class="text-default">
                  <b class="text-bold">Headless</b>: Completely unstyled components, through which you gain complete
                  control over your app&apos;s styles and accessibility.
                </p>
                <p class="text-default">
                  <b class="text-bold">Color themes</b>: Use generated color schemes or create your own custom theme.
                </p>
                <p class="text-default">
                  <b class="text-bold">Multiple ready-made themes</b>: Pre-made themes for various use cases, including
                  mobile applications, websites, dashboards, desktop applications.
                </p>
                <p class="text-default">
                  <b class="text-bold">Plain CSS</b>: Contribute directly to CSS styles
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="text-prose">
                <h3 class="text-h3">Documentation</h3>
                <p class="text-default">
                  <b class="text-bold">Automatic documentation generation</b>: Generate documentation directly from your
                  code. Show all components, attributes and styles.
                </p>
                <p class="text-default">
                  <b class="text-bold">Playbook</b>: Generate a playbook of code examples which allows you to showcase
                  and experiment with different implementations.
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </LayoutSection>
    </WebsiteLayout>
  );
}
