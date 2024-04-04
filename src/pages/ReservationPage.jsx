import { useEffect, useState } from "react"
import useCrud from "../hook/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"
import '../components/ReservationsPage/styles/ReservationPage.css'

const ReservationPage = () => {

  const [ reservations, getReservations, , deleteReservation ] = useCrud()
  const [ reserveSelected, setReserveSelected] = useState(undefined)

  useEffect(() => {
    getReservations('/bookings')
  }, [])

  return (
    <div className="reservation">
      <h2 className="reservation__h2"> Reservations </h2>
      <FormReviews
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}
      />
      <div className="reservation__cards_container">
        {
          reservations?.map(reserve => (
            <ReserveCard
              key={reserve.id}
              reserve={reserve}
              deleteReservation={deleteReservation}
              setReserveSelected={setReserveSelected}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ReservationPage