import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
  email: string;
  password1: string;
  password2: string;
}

const initialState: SignupState = {
  email: "",
  password1: "",
  password2: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState: initialState,
  reducers: {
    updateSignup: (state, action: PayloadAction<SignupState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSignup } = signupSlice.actions;
export default signupSlice.reducer;
