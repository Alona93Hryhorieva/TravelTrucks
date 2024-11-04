import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers";
import css from "./FilterForm.module.css";

export default function FilterForm() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    hasAC: false,
    hasKitchen: false,
  });

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCampers(filters));
  };

  return (
    <form onSubmit={handleSubmit} className={css.filterForm}>
      <input
        type="text"
        name="location"
        value={filters.location}
        onChange={handleFilterChange}
        placeholder="Location"
      />
      <select name="type" value={filters.type} onChange={handleFilterChange}>
        <option value="">All Types</option>
        <option value="RV">RV</option>
        <option value="Camper">Camper</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="hasAC"
          checked={filters.hasAC}
          onChange={handleFilterChange}
        />
        Air Conditioning
      </label>
      <label>
        <input
          type="checkbox"
          name="hasKitchen"
          checked={filters.hasKitchen}
          onChange={handleFilterChange}
        />
        Kitchen
      </label>
      <button type="submit">Apply Filters</button>
    </form>
  );
}
