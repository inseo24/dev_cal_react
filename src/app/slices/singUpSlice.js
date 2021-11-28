import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk("/auth/signup", async (payload) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        password: payload.password,
        mobileNum: payload.mobilenumber,
      }),
    }
  );
  if (response.ok) {
    const signUp = await response.json();

    if (signUp.code === -1) {
      let error = signUp.data;
      Object.keys(error).forEach(function (key) {
        alert(error[key]);
      });
    }

    if (signUp.code === 1) {
      alert("회원가입에 성공했습니다.");
      window.location.href = "/login";
    }

    return { signUp };
  }
});

const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    status: null,
  },
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.status = "loading";
    },
    [signUp.fulfilled]: (state, action) => {
      state.push(action.payload.signUp);
    },
    [signUp.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default signUpSlice.reducer;
