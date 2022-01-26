import { createSlice } from "@reduxjs/toolkit";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools());

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

//Selectors to pull information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
