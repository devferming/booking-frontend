import { useForm } from "react-hook-form"
import useCrud from "../../hook/useCrud"
import './styles/FormReviews.css'

const FormReviews = ({ reserveSelected, setReserveSelected }) => {

  const { handleSubmit, register, reset } = useForm()

  const [, , createReview] = useCrud()

  const submit = data => {
    const obj = {
      ...data,
      hotelId: reserveSelected?.hotelId,
      rating: +data.rating
    }
    createReview('/reviews', obj)
    reset({
      rating: '5',
      comment: ''
    })
    setReserveSelected()
  }

  const reserveClose = () => {
    setReserveSelected()
  }

  return (
    <div className={`form_review__div ${reserveSelected ? '' : 'elem_disabled'}`}>
      <div className="form_review__container">
        <h2 className="form_review__h3">Form Reviews <p onClick={reserveClose} className="form_review__label_button_x">x</p></h2>
        <form className="form_review__form" onSubmit={handleSubmit(submit)}>
          <h3 className="form_review__name">{reserveSelected?.hotel.name}</h3>
          <label className="form_review__label_rating">
            <span className="form_review__rating">Rating</span>
            <select className="form_review__select" {...register('rating')}>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>
          </label>
          <label className="form_review__label_comment">
            <span className="form_review__comment">Comments</span>
            <textarea className="form_review__text" {...register('comment')} />
          </label>
          <button className="form_review__label_button">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormReviews