import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { switchsessionF } from "../store/states/session.state"

const useAuth = () => {

  const session = useSelector(states => states.session)
  const dispatch = useDispatch()



  const [crrLoginUser, setCrrLogin] = useState({welcome: '', firstName: '', lastName: '', auth: false})
  
  //Register
  const createNewUser = (data) => {
    const url = 'http://localhost:8080/users'
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  //Login
  const loginUser = (data) => {
    const url = 'http://localhost:8080/users/login'
    axios.post(url, data)
    .then(res => {
      setCrrLogin({
        welcome: 'Welcome',
        firstName : res.data.user.firstName,
        lastName : res.data.user.lastName,
        auth: true
      })
      dispatch(switchsessionF(true))
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userInfo', JSON.stringify(res.data.user))
    })
    .catch(err => {
      dispatch(switchsessionF(false))
      console.log(err)
    })
  }

  return { createNewUser, loginUser, crrLoginUser, setCrrLogin }

}

export default useAuth