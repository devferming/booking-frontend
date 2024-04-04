import { useParams } from "react-router-dom"
import useFecth from "../hook/useFecth"
import { useEffect } from "react"
import { Map, Marker, ZoomControl } from "pigeon-maps"
import OtherHotels from "../components/HotelInfoPage/OtherHotels"
import ReservationsHotel from "../components/HotelInfoPage/ReservationsHotel"
import SliderImgs from "../components/HotelInfoPage/SliderImgs"
import CommentSection from "../components/HotelInfoPage/CommentSection"
import '../components/HotelInfoPage/styles/HotelInfoPage.css'
import ReactCountryFlag from "react-country-flag"

const HotelInfoPage = () => {

  const { id } = useParams()

  const url = `http://localhost:8080/hotels/${id}`
  const [hotel, getHotel] = useFecth(url)
  const stars = '⭐'.repeat(Number(hotel?.rating))

  useEffect(() => {
    getHotel()
  }, [url])

  return (
    <div className="info_page__container">
      <ReservationsHotel
        hotelId={hotel?.id}
      />
      <header className="info_page__header">
        <h2 className="info_page__header_h2">{hotel?.name}</h2>
        <p className="info_page__header_p">Rating <span className="info_page__header_p--span">{`${hotel?.rating} ${stars}`}</span></p>
      </header>
      <div className="info_page__silder_map">
        <SliderImgs
          hotel={hotel}
        />
        <div className="info_page__map">
          {
            hotel &&
            (
              <Map
                defaultCenter={[+hotel.lat, +hotel.lon]}
                defaultZoom={11}
              >
                <Marker
                  width={50}
                  color="red"
                  anchor={[+hotel.lat, +hotel.lon]}
                />
                <ZoomControl />
              </Map>
            )
          }
        </div>
      </div>

      <div className="info_page__hotel_info">
        <div className="info_page__name_country">
          <h3 className="info_page__name_country_span">
            <ReactCountryFlag className="info_page__name_country_flag" countryCode={`${hotel?.city.countryId}`} svg />
            {' ' + hotel?.city.name}
            <span className="info_page__name_country_span"> {hotel?.city.country}</span>
          </h3>
        </div>

        <p className="info_page__address_p">
          <i className='bx bx-map info_page__address_i'></i>
          <span className="info_page__address_address">{hotel?.address}</span>
        </p>

        <p className="info_page__address_desc">{hotel?.description}</p>
      </div>

      <CommentSection
        hotelId={hotel?.id}
      />

      <OtherHotels
        cityId={hotel?.city.id}
        hotelId={hotel?.id}
      />
    </div>
  )
}

export default HotelInfoPage