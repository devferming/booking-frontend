import { Link } from "react-router-dom"
import './styles/HeaderShared.css'
import RegisterPage from "../../pages/RegisterPage"
import { useDispatch, useSelector } from "react-redux"
import { switchRegisterF } from "../../store/states/register.state"
import LoginPage from "../../pages/LoginPage"
import { switchloginF } from "../../store/states/login.state"

const HeaderShared = () => {

  const register = useSelector(states => states.register)
  const login = useSelector(states => states.login)
  const session = useSelector(states => states.session)
  const dispatch = useDispatch()

  const handleRegister = () => {
    dispatch(switchRegisterF(!register))
  }

  const handleLogin = () => {
    dispatch(switchloginF(!login))
  }

  return (
    <header className="header_shared">
      <h1 className="header_shared_h1"><Link className="header_shared_h1_link" to={'/'}>BookingApp</Link></h1>
      <nav className="header_shared_nav">
        <ul className="header_shared_nav_ul">
          {session &&
            <li className="header_shared_nav_ul_li"><Link className="header_shared_nav_ul_li_link" to={'/reservations'}>Reservations</Link></li>
          }
          {/* <li className="header_shared_nav_ul_li"><Link className="header_shared_nav_ul_li_link" to={'/register'}>Register</Link></li> */}
          {!session &&
            <li onClick={handleRegister} className="header_shared_nav_ul_li header_shared_nav_ul_li_link">Register</li>
          }
          {/* <li className="header_shared_nav_ul_li"><Link className="header_shared_nav_ul_li_link" to={'/login'}>Login</Link></li> */}
          {!session &&
            <li onClick={handleLogin} className="header_shared_nav_ul_li header_shared_nav_ul_li_link">Login</li>
          }
        </ul>
      </nav>
      <RegisterPage />
      <LoginPage />
    </header>
  )
}

export default HeaderShared