import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: 'register',
  initialState: false,
  reducers: {
    setRegisterF: (state, action) => action.payload
  }
})

export const { setRegisterF } = registerSlice.actions
export default registerSlice.reducer

export const switchRegisterF = (data) => (dispatch) => {
  dispatch(setRegisterF(data))
}

