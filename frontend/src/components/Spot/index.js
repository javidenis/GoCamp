import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { removeSpot } from '../../store/spots';
import { addReview, deleteReview, editReview, loadReviews } from '../../store/reviews';
import { useState, useEffect } from 'react';
import './spot.css'

export default function Spot() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const spots = useSelector(state => state.spots)
  const spot = spots[id]
  const reviews = useSelector(state => state.reviews)
  const sessionUser = useSelector(state => state.session.user);
  const [description, setDescription] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeSpot(id))
    history.push('/')
  }

  const handleEdit = (e) => {
    e.preventDefault();
    history.push(`/spots/${id}/edit`)
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    dispatch(addReview(sessionUser.id, id, description))
    dispatch(loadReviews())
  }

  useEffect(() => {
    dispatch(loadReviews())
  }, [dispatch])

  const handleReviewDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(e.target.value))
    dispatch(loadReviews())
  }

  const handleReviewEdit = (e) => {
    e.preventDefault();
    dispatch(editReview(e.target.value, sessionUser.id, id, description))
    dispatch(loadReviews())
  }


  const allReviews = Object.values(reviews).map((el) => (
    <div className='review'>
      <div>{el?.description}</div>
      {sessionUser?.id === el?.userId && <button onClick={handleReviewDelete} value={el?.id}>Delete Review</button>}
      {sessionUser?.id === el?.userId && <button onClick={handleReviewEdit} value={el?.id}>Edit Review</button>}
    </div>
  ))

  return (
    <div className='spot'>
      <div key={spot?.name}>{spot?.name}</div>
      {sessionUser?.id === spot?.userId && <button onClick={handleDelete}>Delete Event</button>}
      {sessionUser?.id === spot?.userId && <button onClick={handleEdit}>Edit Event</button>}
      <img className='spot-image' src={spot?.image} />
      <div key={spot?.price}>${spot?.price}</div>
      <div key={spot?.city}>{spot?.city}</div>
      <div key={spot?.state}>{spot?.state}</div>
      {sessionUser?.id !== undefined &&
        <form onSubmit={handleSubmitReview}>
          <textarea placeholder='Leave a Review' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button>Submit Review</button>
        </form>}
      <div>
        {allReviews}
      </div>
    </div>
  )
}
