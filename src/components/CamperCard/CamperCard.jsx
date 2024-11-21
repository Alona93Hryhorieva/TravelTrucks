import { Link } from "react-router-dom";
// import css from "./TruckItem.module.css";
import icons from "../../assets/images/icons.svg";
import Features from "../Features/Features.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors.js";
import { setFavourite } from "../../redux/favourites/slice.js";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const isFavourite =
    favourites.includes(camper.id) & Array.isArray(favourites);

  const handleSetFavourite = () => {
    dispatch(setFavourite(camper.id)); //
  };

  return (
    <div className={css.itemWrapper}>
      {camper.gallery?.[0]?.thumb && (
        <img
          className={css.photo}
          src={`${camper.gallery[0].thumb}`}
          width="292"
          alt={`${camper.name}`}
        />
      )}
      <div className={css.infoWrapper}>
        <div className={css.nameWrapper}>
          <h2 className={css.nameTitle}>{camper.name}</h2>
          <div className={css.favouriteWrapper}>
            <p>{`€ ${Number(camper.price).toFixed(2)}`}</p>
            <svg
              width="26"
              height="24"
              onClick={handleSetFavourite}
              fill={isFavourite ? "#e44848" : "#101828"}
              cursor="pointer"
            >
              <use href={`${icons}#heard`} />
            </svg>
          </div>
        </div>
        <div className={css.ratingWrapper}>
          <svg width="16" height="16">
            <use href={`${icons}#star`} />
          </svg>
          <p className={css.reviews}>
            {camper.rating} ({camper.reviews.length} Reviews)
          </p>
          <svg width="20" height="20">
            <use href={`${icons}#Map`} />
          </svg>
          {camper.location}
        </div>
        <p className={css.itemDescription}>
          {`${camper.description.substring(0, 60)}...`}
        </p>
        <Features camper={camper} />
        <Link to={`/catalog/${camper.id}`}>
          <button type="button" className={css.itemButton}>
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
}
