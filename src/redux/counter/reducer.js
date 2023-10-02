import { ADD, REMOVE, FILTER } from './constants';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filtered: '100',
};

const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(ADD, (state, action) => {
      state.items = [...state.items, action.payload];
    })
    .addCase(REMOVE, (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    })
    .addCase(FILTER, (state, action) => {
      state.filtered = action.payload.q
        ? state.items.filter(contact => contact.name.includes(action.payload.q))
        : '100';
    });
});

export default counterReducer;
