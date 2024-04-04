import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/FilterPrice.css'

const FilterPrice = ( { setFromTo } ) => {

  const { handleSubmit, register, reset } = useForm()
  const submit = data => {
    const obj = {
      from: +data.from,
      to: +data.to === 0 ? Infinity : +data.to
    }
    setFromTo(obj)
  }

  return (
    <div className="filter_price_container">
      {/* <h3>Price</h3> */}
      <form className="filter_price_container_form" onSubmit={handleSubmit(submit)}>
        <label>
          {/* <span>From</span> */}
          <input className="filter_price_container_form_input_lower_price" {...register('from')} type="number" placeholder='Min price' />
        </label>
        <label>
          {/* <span>To</span> */}
          <input className="filter_price_container_form_input_higher_price" {...register('to')} type="number" placeholder='Max price' />
        </label>
        <button className="filter_price_container_form_button">Apply</button>
      </form>
    </div>
  )
}

export default FilterPrice