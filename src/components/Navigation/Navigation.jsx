import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const classNameActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <nav className={css.box}>
      <NavLink className={classNameActive} to="/">
        Home
      </NavLink>
      <NavLink className={classNameActive} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
}
