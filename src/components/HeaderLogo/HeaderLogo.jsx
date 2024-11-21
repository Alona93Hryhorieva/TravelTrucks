import React from "react";
import { Link } from "react-router-dom";
import css from "../HeaderLogo/HeaderLogo.module.css";
import logo from "../../assets/images/Logo-min.png";
import logo2x from "../../../src/assets/images/Logo@2x-min.png";

export default function HeaderLogo() {
  return (
    <Link to="/">
      <picture>
        <source srcSet={`${logo2x} 2x, ${logo} 1x`} />
        <img
          className={css.logoImage}
          src={logo}
          loading="lazy"
          alt="Logo"
          width="136"
          height="15"
        />
      </picture>
    </Link>
  );
}
