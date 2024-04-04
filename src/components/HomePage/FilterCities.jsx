import React, { useEffect, useRef } from 'react'
import useFecth from '../../hook/useFecth'
import './styles/FilterCities.css'

const FilterCities = ({ setidCity, idCity }) => {

  const url = 'https://booking-api-jnv4.onrender.com/cities' //https://hotels-api.academlo.tech/cities
  const [cities, getCities] = useFecth(url)

  useEffect(() => {
    getCities()
  }, [])

  const cityRef = useRef()

  const handleFilterCities = () => {
    const selectedCity = cityRef.current.value
    const cityId = selectedCity === 'All cities' ? selectedCity : Number(selectedCity)
    setidCity(cityId);
  };

  return (
    <div className='filter_cities_container'>
      <select className='filter_cities_container_select' ref={cityRef} onChange={handleFilterCities}>
        <option className='filter_cities_container_select_option' value="All cities">All cities</option>
        {cities?.map((city) => (
          <option className='filter_cities_container_select_option' value={city.id} key={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterCities