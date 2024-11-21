import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/selectors.js";

export const selectFilters = (state) => state.filters;
export const selectFilterLocation = (state) => state.filters.location;
export const selectFilterForm = (state) => state.filters.form;
export const selectFilterFeatures = (state) => state.filters.features;

export const selectFilterCampers = createSelector(
  [selectCampers, (state) => state.filters],
  (campers, filters) => {
    if (!Array.isArray(campers)) {
      console.error("Expected campers to be an array, but got:", campers);
      return []; // Повертаємо порожній масив, якщо campers не є масивом
    }
    // Перевірка фільтрів з наданням значень за замовчуванням
    const { location = "", form = "", features = [] } = filters || {};

    console.log("Applying filters:", filters); // Логування фільтрів

    return campers.filter((camper) => {
      // Перевірки на відповідність фільтрам
      const matchesLocation = location
        ? camper.location &&
          camper.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesForm = form ? camper.form === form : true;
      const matchesFeatures = features.length
        ? features.every((feature) =>
            feature === "automatic"
              ? camper.transmission === "automatic"
              : camper[feature] === true
          )
        : true;

      console.log(
        "Camper:",
        camper,
        "Matches filters:",
        matchesLocation && matchesForm && matchesFeatures
      ); // Логування кожного кемпера
      return matchesLocation && matchesForm && matchesFeatures;
    });
  }
);
