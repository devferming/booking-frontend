import { useEffect, useState } from "react"
import useCrud from "../../hook/useCrud"
import './styles/CommentSection.css'

const CommentSection = ({ hotelId }) => {

  const [reviews, getReviews] = useCrud()
  const [formattedDates, setFormattedDates] = useState([]);

  useEffect(() => {

    if (hotelId) {
      getReviews(`/reviews?hotelId=${hotelId}`)
    }

  }, [hotelId])

  useEffect(() => {
    const formattedDatesArray = reviews?.results.map(reviewInfo => {
      const fecha = new Date(reviewInfo.createdAt);
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const año = fecha.getFullYear();
      const fechaFormateada = `${dia}/${mes}/${año}`;
      return fechaFormateada;
    });
    setFormattedDates(formattedDatesArray);

  }, [reviews]);


  return (
    <div className="reviews_container">
      {
        reviews?.results.map((reviewInfo, idx) => (
          <div className="reviews_container__comment" key={reviewInfo.id}>
            <div className="reviews_container__div">
              <p className="reviews_container__star__numb">{reviewInfo.rating}</p>
              <p className="reviews_container__star__star">⭐</p>
            </div>
            <div className="reviews_container__user">
              <h4 className="reviews_container__h4">
                {reviewInfo.user.firstName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' '}
                {reviewInfo.user.lastName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </h4>
              <p className="reviews_container__p">{reviewInfo.comment}</p>
            </div>
            <p className="reviews_container__date">{formattedDates?.[idx]}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CommentSection