import { useRef } from "react"
import './styles/FilterName.css'

const FilterName = ( { setNameInput} ) => {

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setNameInput(inputSearch.current.value.trim().toLowerCase())
    inputSearch.current.value = ''
  }

  return (
    <form className="filter_name_form" onSubmit={handleSubmit}>
      <input className="filter_name_form_input" ref={inputSearch} type="text" placeholder="Search by city"/>
      <button className="filter_name_form_button">Search</button>
    </form>
  )
}

export default FilterName