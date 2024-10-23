import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Експортуємо екшени
export const { addContact, deleteContact } = contactsSlice.actions;

// Селектор для отримання списку контактів
export const selectContacts = (state) => state.contacts.items;

// Експортуємо редюсер для store
export default contactsSlice.reducer;
