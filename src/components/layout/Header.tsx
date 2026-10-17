import "./Header.css";
import { Link } from "@tanstack/solid-router";
import { LogoFull } from "~/components/layout/LogoFull";

export const Header = () => (
  <header class="header">
    <Link aria-label="go to Home" class="header-logo" to="/">
      <LogoFull />
    </Link>

    <nav>
      <ul aria-label="main navigation" class="header-nav">
        <li>
          <Link class="header-link" to="/app">
            App
          </Link>
        </li>
        <li>
          <Link class="header-link" to="/">
            Blog
          </Link>
        </li>
      </ul>
    </nav>

    <nav>
      <ul aria-label="main navigation" class="header-nav">
        <li>
          <Link class="header-link" to="/">
            <button class="button button--type-text" type="button">
              Log in
            </button>
          </Link>
        </li>
        <li>
          <Link class="header-link" to="/">
            <button class="button" type="button">
              Sign up
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
