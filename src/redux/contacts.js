import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove(state, action) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    filterItems(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export default persistReducer(persistConfig, contactsSlice.reducer);

export const { add, remove, filterItems } = contactsSlice.actions;

export const getItemsValue = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;