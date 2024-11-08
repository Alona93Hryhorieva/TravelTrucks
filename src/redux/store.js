import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import campersReducer from "./campers/slice.js";
import filtersReducer from "./filters/slice.js";

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig),
    campers: campersReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
