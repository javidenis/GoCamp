import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSpots, removeSpot } from '../../store/spots';
import { addReview, loadReviews } from '../../store/reviews';
import { useState, useEffect } from 'react';
import './spot.css'
import EditReview from '../EditReview';

export default function Spot() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const spots = useSelector(state => state.spots)
  const spot = spots[id]
  const reviews = useSelector(state => state.reviews)
  const sessionUser = useSelector(state => state.session.user);
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);
  const spotReviews = Object.values(reviews).filter(review => review?.spotId === spot?.id)


  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeSpot(id))
    dispatch(getSpots())
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


  useEffect((errors = []) => {
    if (description.length < 1) errors.push("Description name is required");
    setErrors(errors);
}, [description]);

  return (
    <div className='spot'>
      <div className='spot-title'>{spot?.name}</div>

      <div className='image-container'>
        <img className='spot-image' src={spot?.image} />
      </div>
      <div className='spot-btns'>
        {sessionUser?.id === spot?.userId && <button onClick={handleDelete}>Delete Event</button>}
        {sessionUser?.id === spot?.userId && <button onClick={handleEdit}>Edit Event</button>}
      </div>
      <div className='spot-description-container'>
        <div className='spot-description'>
          <div>${spot?.price}</div>
          <div>{spot?.city}</div>
          <div>{spot?.state}</div>
          <div className='desc'>{spot?.description}</div>
        </div>
      </div>
      {sessionUser?.id !== undefined &&
        <div className='review-textarea-container'>
          <form onSubmit={handleSubmitReview} className='review-textarea'>
            <textarea placeholder='Leave a Review' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button disabled={!!errors.length}>Submit Review</button>
          </form>
        </div>}
      <div>
        <EditReview reviews={spotReviews} />
      </div>
    </div>
  )
}
