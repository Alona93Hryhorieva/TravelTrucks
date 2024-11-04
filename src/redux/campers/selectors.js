import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filter/selectors";

import { createSelector } from "reselect";
import { selectFilters } from "../filter/selectors";

export const selectCampers = (state) => state.campers.campers;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = filters.location
        ? camper.location.includes(filters.location)
        : true;
      const matchesVehicleType = filters.vehicleType
        ? camper.vehicleType === filters.vehicleType
        : true;
      const matchesEquipment = Object.entries(filters.equipment).every(
        ([key, value]) => !value || camper.equipment[key] === value
      );

      return matchesLocation && matchesVehicleType && matchesEquipment;
    });
  }
);
