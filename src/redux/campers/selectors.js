export const selectCampers = (state) => {
  console.log("State campers:", state.campers); // Перевірка стану
  return state.campers ? state.campers.campers : []; // Перевірка на існування
};

export const selectCamper = (state) => state.campers.camper;

export const selectLoading = (state) => {
  console.log("Loading state:", state.campers.isLoading); // Перевірка
  return state.campers.isLoading;
};
export const selectError = (state) => state.campers.error;
