export const selectFavourites = (state) => state.favourites.items;

// import { createSelector } from "@reduxjs/toolkit";
// import { selectFavourites } from "../favourites/selectors"; // Імпортуємо селектор обраних кемперів
// import { selectCampers } from "../campers/selectors"; // Імпортуємо селектор для всіх кемперів

// export const selectFavouritedCampers = createSelector(
//   [selectCampers, selectFavourites],
//   (campers, favourites) => {
//     return campers.filter(camper => favourites.items.includes(camper.id)); // Фільтруємо кемперів за їх ID
//   }
// );
