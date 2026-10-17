import { Link } from "@tanstack/solid-router";
import { LogoFull } from "~/components/layout/LogoFull";
import "./Footer.css";

export const Footer = () => (
  <footer class="Footer-content">
    <Link aria-label="got to Home" to="/">
      <LogoFull />
    </Link>
  </footer>
);
