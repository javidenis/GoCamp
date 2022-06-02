import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { removeSpot } from '../../store/spots';

export default function Spot() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const spots = useSelector(state => state.spots)
  const spot = spots[id]
  const sessionUser = useSelector(state => state.session.user);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeSpot(id))
    history.push('/')
}

const handleEdit = (e) => {
  history.push(`/spots/${id}/edit`)
}

  return (
    <div className='spot'>
      <div key={spot?.name}>{spot?.name}</div>
      {sessionUser?.id === spot.userId && <button onClick={handleDelete}>Delete Event</button>}
      {sessionUser?.id === spot.userId && <button onClick={handleEdit}>Edit Event</button>}
      <img src={spot?.image}/>
      <div key={spot?.price}>${spot?.price}</div>
      <div key={spot?.city}>{spot?.city}</div>
      <div key={spot?.state}>{spot?.state}</div>
      <button>Review</button>
    </div>
  )
}
