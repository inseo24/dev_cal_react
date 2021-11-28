import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk("/auth/signin", async (payload) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/auth/signin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    }
  );
  if (response.ok) {
    const signIn = await response.json();

    return { signIn };
  }
});

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    status: null,
  },
  extraReducers: {
    [signIn.pending]: (state, action) => {
      state.status = "loading";
    },
    [signIn.fulfilled]: (state, action) => {
      state.push(action.payload.signUp);
    },
    [signIn.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default signInSlice.reducer;
