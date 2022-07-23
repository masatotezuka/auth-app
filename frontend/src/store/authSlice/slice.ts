// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { login, signUp, logout, User } from "../../api";
// type InitialState = {
//   user: User;
//   status: "idle" | "pending" | "fulfilled" | "rejected";
// };

// const initialState: InitialState = {
//   user: { mail: "" },
//   status: "idle",
// };

// export const signUpUser = createAsyncThunk(
//   "auth/signUp",
//   async (data: User) => {
//     const response = await signUp(`http://localhost:8000/sign-up`, data);
//     return response;
//   }
// );

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (data: User): Promise<{ user: User }> => {
//     const response = await login(`http://localhost:8000/login`, data);
//     console.log(response.data);

//     return response.data;
//   }
// );

// export const logoutUser = createAsyncThunk(
//   "auth/logout",
//   async (): Promise<{ user: User }> => {
//     const response = await logout(`http://localhost:8000/logout`);
//     return response.data;
//   }
// );

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUpUser.fulfilled, (state, action) => {
//         state.status = "fulfilled";
//         state.user = action.payload[0];
//         const lastName = action.payload[0].lastName;
//         if (typeof lastName === "string") {
//           localStorage.setItem("lastName", lastName);
//         }
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.status = "fulfilled";
//         state.user = action.payload.user;
//         const lastName = action.payload.user.lastName;
//         if (typeof lastName === "string") {
//           localStorage.setItem("lastName", lastName);
//         }
//       })
//       .addCase(logoutUser.fulfilled, (state, action) => {
//         state.status = "fulfilled";
//         state.user = action.payload.user;
//       });
//   },
// });
