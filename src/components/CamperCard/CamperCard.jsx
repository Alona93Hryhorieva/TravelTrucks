import css from "./CamperCard.module.css";

export default function CamperCard({ camper, isFavorite, onFavoriteToggle }) {
  return (
    <div className={css.camperCard}>
      <h3>{camper.name}</h3>
      <p>Location: {camper.location}</p>
      <p>Type: {camper.type}</p>
      <button onClick={onFavoriteToggle}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
