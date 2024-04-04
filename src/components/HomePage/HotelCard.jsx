import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'
import ReactCountryFlag from "react-country-flag"

const HotelCard = ( { hotel } ) => {

  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`../hotel/${hotel.id}`)
  }

  return (
    <article className="card">
      <header className="card__header">
        <img className="card__img" src={hotel.images[0].url} alt="hotel img"/>
      </header>
      <section className="card__body">
        <h3 className="card__name">{hotel.name}</h3>
        <span className="card__rating">{`Rating ${hotel.rating}`}</span>
        <div className="card_location_container">
          <ReactCountryFlag className="info_page__name_country_flag" countryCode={`${hotel.city.countryId}`} svg />
          <p className="card__location">{hotel.city.name}</p>,
          <p className="card__location_country">{hotel.city.country}</p>
        </div>
        <div className="card__price">{hotel.price}</div>
        <button className="card__btn" onClick={handleNavigate}>See more...</button>
      </section>
    </article>
  )
}

export default HotelCard