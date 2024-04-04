import ReactCountryFlag from "react-country-flag"
import getDaysFromDates from "../../services/getDaysFromDates"
import './styles/ReserveCard.css'

const ReserveCard = ({ reserve, deleteReservation, setReserveSelected }) => {

  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)

  const handleDelete = () => {
    deleteReservation('/bookings', reserve.id)
  }

  const handleReviews = () => {
    setReserveSelected(reserve)
  }

  return (
    <article className="card">
      <header className="card__header">
        <img className="reserve__img card__img" src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className="card__body">
        <h3 className="card__name"> {reserve.hotel.name} </h3>
        <div className="card__location_country">
          <ReactCountryFlag className="info_page__name_country_flag" countryCode={`${reserve.hotel.city.countryId}`} svg />
          {reserve.hotel.city.name},
          {reserve.hotel.city.country}
        </div>
        <div><span className="card__reserve_span">Reservations days:</span> <span className="card__span2">{reservationsDays}</span></div>
        <div><span className="card__reserve_span">Subtotal Price:</span><span className="card__span2"> {Number(reserve.hotel.price) * reservationsDays} </span></div>
      </section>
      <div className="card__reserve_btn_container">
        <button className="card__reserve_btn" onClick={handleReviews}>Qualify</button>
        <button className="card__reserve_btn" onClick={handleDelete}>Delete</button>
      </div>
    </article>
  )

}

export default ReserveCard