import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Contacts {
  id: string;
  name: string;
  number: string;
}

const initialState: Contacts[] = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (
      state,
      action: PayloadAction<{ name: string; number: string }>
    ) => {
      const { name, number } = action.payload;
      state.push({
        id: `id-${nanoid()}`,
        name,
        number,
      });
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
