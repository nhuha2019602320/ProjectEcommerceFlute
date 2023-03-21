import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      curretUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      currentInformation: null,
      isFetching: false,
      error: false
    }
  },
  reducers: {
    loginStart: (state) => {
        state.login.isFetching =true;
    },
    loginSuccess: (state, action) => {
        state.login.isFetching = false;
        state.login.currectUser = action.payload;
        state.login.error = false
        localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginFailed: (state) => {
        state.login.isFetching=false;
        state.login.error=true
    },
    logout: () => {
        localStorage.removeItem("user")
        localStorage.removeItem("totalBill")
    },
    registerStart:(state) => {
      state.register.isFetching = false;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.currentInformation = action.payload;
      state.register.error = false;
    },
    registerFailed: (state) => {
      state.register.error=false;
    }
  },
});

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logout
} = authSlice.actions;

export default authSlice.reducer;
