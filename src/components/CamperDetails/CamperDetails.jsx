// import css from "./CamperCard.module.css";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import { Suspense, useState } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import { selectCamper } from "../../redux/campers/selectors.js";
import css from "./CamperDetails.module.css";
import icons from "../../assets/images/star.svg";
import icons2 from "../../assets/images/map.svg";
// import CampersFeatures from "../CampersFeatures/CampersFeatures.jsx";
// import CampersReviews from "../CampersReviews/CampersReviews.jsx";
import defaultPicture from "../../assets/images/picture.jpg";

export default function CamperDetails() {
  const classNameActive = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };
  const camper = useSelector(selectCamper); // Отримуємо список всіх кемперів з Redux

  if (!camper) {
    return <p>Інформація про кемпера недоступна.</p>;
  }

  return (
    <div>
      <h1>{camper.name}</h1>
      <div>
        <svg className={css.icon} width="16" height="16">
          <use xlinkHref={`${icons}#star`} />
        </svg>
        <div>
          <h2>{camper.rating}</h2>
          {camper.reviews && camper.reviews.length > 0 ? (
            <p>({camper.reviews.length} Reviews)</p>
          ) : (
            <p>Немає відгуків.</p>
          )}
          <svg className={css.icon} width="20" height="20">
            <use xlinkHref={`${icons2}#Map`} />
          </svg>{" "}
          <p>{camper.location}</p>
        </div>
        <h2>{`€ ${Number(camper.price).toFixed(2)}`}</h2>

        <div className="gallery">
          <h2>Галерея</h2>
          <ul>
            {camper.gallery && camper.gallery.length > 0 ? (
              camper.gallery.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.thumb}
                    alt={`Camper ${camper.name} photo ${index + 1}`}
                  />
                </li>
              ))
            ) : (
              <img src={defaultPicture} alt="Default camper" />
            )}
          </ul>
        </div>
      </div>

      <h2>{camper.description}</h2>

      <nav className={css.navigation}>
        <NavLink className={classNameActive} to="features">
          Features
        </NavLink>
        <NavLink className={classNameActive} to="reviews">
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<b>Loading...</b>}>
        <Outlet />
      </Suspense>

      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
