import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // локальне сховище
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Конфігурація для redux-persist
const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // Тільки items буде збережено
};

// Persist reducer для контактів
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Створюємо store
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

// Створюємо persistor для PersistGate
export const persistor = persistStore(store);
