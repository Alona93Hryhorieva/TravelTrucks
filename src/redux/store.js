import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { camperReducer } from "./campers/slice.js";
import { filtersReducer } from "./filters/slice.js";
import { favouritesReducer } from "./favourites/slice.js";

// Конфігурація для збереження фільтрів
const filtersPersistConfig = {
  key: "filters",
  storage,
  whitelist: ["features", "form", "location"], // Обираємо тільки поля для збереження
};

// Конфігурація для збереження улюблених
const favouritesPersistConfig = {
  key: "favourites",
  storage,
};

export const store = configureStore({
  reducer: {
    campers: camperReducer,
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    favourites: persistReducer(favouritesPersistConfig, favouritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
