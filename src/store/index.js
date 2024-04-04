import { configureStore } from "@reduxjs/toolkit";
import hotels from './states/hotels.state'
import register from './states/register.state'
import login from './states/login.state'
import session from './states/session.state'

export default configureStore({
  reducer: {
    hotels,
    register,
    login,
    session
  }
})