import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, addFavorite, removeFavorite } from "../../redux/campers";
import {
  setLocation,
  setVehicleType,
  toggleEquipment,
} from "../../redux/filters";
import CamperCard from "./CamperCard"; // компонент для відображення кемпера
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const campers = useSelector((state) => state.campers.items);
  const favorites = useSelector((state) => state.campers.favorites);
  const location = useSelector((state) => state.filters.location);
  const vehicleType = useSelector((state) => state.filters.vehicleType);
  const equipment = useSelector((state) => state.filters.equipment);

  useEffect(() => {
    const filters = { location, vehicleType, equipment };
    dispatch(fetchCampers(filters));
  }, [dispatch, location, vehicleType, equipment]);

  const handleFavoriteToggle = (camperId) => {
    if (favorites.includes(camperId)) {
      dispatch(removeFavorite(camperId));
    } else {
      dispatch(addFavorite(camperId));
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "equipment") {
      dispatch(toggleEquipment(value)); // використання Redux для зміни обладнання
    } else if (name === "location") {
      dispatch(setLocation(value));
    } else if (name === "vehicleType") {
      dispatch(setVehicleType(value));
    }
  };

  return (
    <div className={css.catalogContainer}>
      <div className={css.filterForm}>
        <h2>Filter Campers</h2>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={handleFilterChange}
        />
        <select
          name="vehicleType"
          onChange={handleFilterChange}
          value={vehicleType}
        >
          <option value="">Select Vehicle Type</option>
          <option value="Fully Integrated">Fully Integrated</option>
          <option value="VAN">VAN</option>
          <option value="ALCOVE">ALCOVE</option>
        </select>
        <div>
          <h3>Equipment</h3>
          {["AC", "AUTOMATIC", "KITCHEN", "TV", "BATHROOM"].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                name="equipment"
                value={item}
                checked={equipment.includes(item)}
                onChange={handleFilterChange}
              />{" "}
              {item}
            </label>
          ))}
        </div>
      </div>
      <div className={css.campersList}>
        {campers.length > 0 ? (
          campers.map((camper) => (
            <CamperCard
              key={camper.id}
              camper={camper}
              isFavorite={favorites.includes(camper.id)}
              onFavoriteToggle={() => handleFavoriteToggle(camper.id)}
            />
          ))
        ) : (
          <p>No campers found.</p>
        )}
      </div>
    </div>
  );
}
