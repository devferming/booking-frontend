import { useForm } from "react-hook-form"
import useAuth from "../hook/useAuth"
import { useDispatch, useSelector } from "react-redux"
import { switchRegisterF } from "../store/states/register.state"
import '../components/RegisterPage/styles/RegisterPage.css'
import { switchloginF } from "../store/states/login.state"


const RegisterPage = () => {

  const { handleSubmit, reset, register } = useForm()
  const { createNewUser } = useAuth()

  const registerForm = useSelector(states => states.register)
  const login = useSelector(states => states.login)
  const dispatch = useDispatch()

  const submit = data => {
    createNewUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'OTHER'
    })
    dispatch(switchRegisterF(!registerForm))
    dispatch(switchloginF(!login))
  }

  const registerClose = () => {
    dispatch(switchRegisterF(!registerForm))
  }

  return (
    <div  className={`form_register__div ${registerForm ? '' : 'elem_disabled'}`}>
      <div className="form_register__container">
        <h2 className="form_register__h3">Register <p onClick={registerClose} className="form_review__label_button_x">x</p></h2>
        <form className="form_register__form" onSubmit={handleSubmit(submit)}>
            <input className="form_register__input" {...register('firstName')} type="text" placeholder="First Name"/>
            <input className="form_register__input" {...register('lastName')} type="text" placeholder="Last Name"/>
            <input className="form_register__input" {...register('email')} type="email" placeholder="Email"/>
            <input className="form_register__input" {...register('password')} type="password" placeholder="Password"/>
            <select className="form_register__input" {...register('gender')}>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="OTHER">OTHER</option>
            </select>
          <button className="form_register__button">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage