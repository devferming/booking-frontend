import { useForm } from "react-hook-form"
import useAuth from "../hook/useAuth"
import '../components/LoginPage/styles/LoginPage.css'
import { useDispatch, useSelector } from "react-redux"
import { switchloginF } from "../store/states/login.state"
import { switchsessionF } from "../store/states/session.state"

const LoginPage = () => {

  const { handleSubmit, reset, register } = useForm()
  const { loginUser, crrLoginUser, setCrrLogin } = useAuth()

  const loginForm = useSelector(states => states.login)
  const session = useSelector(states => states.session)
  const dispatch = useDispatch()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
    dispatch(switchloginF(!loginForm))
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    dispatch(switchsessionF(false))
    dispatch(switchloginF(!loginForm))
    setCrrLogin({ welcome: '', firstName: '', lastName: '', auth: false })
  }

  const loginClose = () => {
    dispatch(switchloginF(!loginForm))
  }

  if (session) {

    return (
      <div>
        {crrLoginUser.auth &&
          <div className={`welcome ${session ? '' : 'elem_disabled'}`}>
            <img src="" alt="" />
            <h2 className="welcome__h2">{`${crrLoginUser?.welcome} ${crrLoginUser?.firstName} ${crrLoginUser?.lastName}`}</h2>
            <button className="welcome__button" onClick={handleLogout}>Logout</button>
          </div>
        }
      </div>
    )

  } else {
    return (
      <div>
        {!session &&
          <div className={`form_register__div ${loginForm ? '' : 'elem_disabled'}`}>
            <div className="form_register__container">
              <h2 className="form_register__h3">Login <p onClick={loginClose} className="form_review__label_button_x">x</p></h2>
              <form className="form_register__form" onSubmit={handleSubmit(submit)}>
                <input className="form_register__input" {...register('email')} type="text" placeholder="Email" />
                <input className="form_register__input" {...register('password')} type="password" placeholder="Password" />
                <button className="form_register__button">Submit</button>
              </form>
            </div>
          </div>
        }
      </div>
    )
  }

}

export default LoginPage