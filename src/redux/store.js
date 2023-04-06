import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { username: "" },
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      //action.payload is the new data AKA the new action which change the state
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
