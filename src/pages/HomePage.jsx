import { useEffect, useRef, useState } from "react"
import { getHotelsThunk } from "../store/states/hotels.state"
import { useDispatch, useSelector } from "react-redux"
import ListHotels from "../components/HomePage/ListHotels"
import FilterName from "../components/HomePage/FilterName"
import FilterPrice from "../components/HomePage/FilterPrice"
import FilterCities from "../components/HomePage/FilterCities"
import '../components/HomePage/styles/HomePage.css'

const HomePage = () => {

  const [nameInput, setNameInput] = useState('')

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const [idCity, setidCity] = useState('All cities')

  const hotels = useSelector(states => states.hotels)
  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://booking-api-jnv4.onrender.com/hotels'
    dispatch(getHotelsThunk(url))
  }, [])



  const hotelsFiltered = hotels?.filter(hotelInfo => {
    //Filter name
    const filterName = hotelInfo.name.toLowerCase().includes(nameInput)

    //Filter price

    const priceHotel = +hotelInfo.price
    const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to

    //Filter cities
    const filterCities = idCity === 'All cities' ? (true) : (idCity === hotelInfo.city.id)

    return filterName && filterPrice && filterCities

  })


  return (
    <div className="home_page">
      <div className="home_page_filters_container">
        <FilterName setNameInput={setNameInput} />
        <FilterPrice setFromTo={setFromTo} />
        <FilterCities setidCity={setidCity} idCity={idCity} />
      </div>
      <div className="home_page_list_hotels_container">
        <ListHotels hotels={hotelsFiltered} />
      </div>
    </div>
  )

}

export default HomePage