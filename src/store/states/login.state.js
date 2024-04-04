import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    setloginF: (state, action) => action.payload
  }
})

export const { setloginF } = loginSlice.actions
export default loginSlice.reducer

export const switchloginF = (data) => (dispatch) => {
  dispatch(setloginF(data))
}

