import { useForm } from "react-hook-form"
import useCrud from "../../hook/useCrud"
import './styles/ReservationsHotel.css'
import { useSelector } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"

const ReservationsHotel = ({ hotelId }) => {

  const { handleSubmit, register, reset } = useForm()
  const session = useSelector(states => states.session)

  const [alert, setAlert] = useState(false)

  const [, , createReservation] = useCrud()

  const submit = data => {
    const obj = {
      ...data,
      hotelId
    }
    createReservation('/bookings', obj)
    setAlert(!alert)
  }

  const closeAlert = () => {
    setAlert(!alert)
  }

  return (
    <div className="info_page__reservation">
      {alert &&
        <div className="info_page__feedback">
          <div className="info_page__card">
            <p onClick={closeAlert} className="info_page__card_x">x</p>
            <h2 className="info_page__h2">Successful reservation!</h2>
            <div className="info_page___button_container">
              <button className="info_page__reservation_feedback_button">
                <Link className="info_page__reservation_feedback_button--link" to={'/reservations'}>See reservations</Link>
              </button>
            </div>
          </div>
        </div>
      }
      {session &&
        <form className="info_page__reservation_form" onSubmit={handleSubmit(submit)}>
          <div className="info_page__reservation_form_div_chkin">
            <span className="info_page__reservation_form_span_chkin">Check-in</span>
            <input className="info_page__reservation_form_input_chkin" {...register('checkIn')} type="date" />
          </div>
          <div className="info_page__reservation_form_div_chkou">
            <span className="info_page__reservation_form_span_chkou">Check-out</span>
            <input className="info_page__reservation_form_input_chkou" {...register('checkOut')} type="date" />
          </div>
          <button className="info_page__reservation_form_button">Reserve</button>
        </form>
      }
      {!session &&
        <span className="info_page__reservation_no_loggin">Login to reserve!</span>
      }
    </div>
  )
}

export default ReservationsHotel