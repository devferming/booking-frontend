import { useEffect } from "react"
import useFecth from "../../hook/useFecth"
import HotelCard from "../HomePage/HotelCard"
import './styles/OtherHotels.css'

const OtherHotels = ( { cityId, hotelId } ) => {

  const url = `http://localhost:8080/hotels?cityId=${cityId}`
  const [ hotels, getHotels ] = useFecth(url)

  useEffect(() => {
    cityId && getHotels()
  }, [cityId])
  

  return (
    <div className="other_hotel">
      <h2 className="other_hotels__h2">{`Other Hotels in ${hotels?.[0].city.name}`}</h2>
      <div className="other_hotels__cards">
        {
          hotels?.filter(hotelInfo => hotelInfo.id !== hotelId).map(hotelInfo => (
            <HotelCard
              key={hotelInfo.id}
              hotel={hotelInfo}
              cityId={cityId}
            />
          ))
        }
      </div>
    </div>
  )
}

export default OtherHotels