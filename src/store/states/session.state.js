import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: 'session',
  initialState: false,
  reducers: {
    setsessionF: (state, action) => action.payload
  }
})

export const { setsessionF } = sessionSlice.actions
export default sessionSlice.reducer

export const switchsessionF = (data) => (dispatch) => {
  dispatch(setsessionF(data))
}
