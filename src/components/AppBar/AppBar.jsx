import Navigation from "../Navigation/Navigation";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <HeaderLogo />
      <Navigation />
    </header>
  );
}
