import { useSelector, useDispatch } from 'react-redux';
import { deleteReview, editReview, loadReviews } from '../../store/reviews';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './SingleReview.css'

export default function SingleReview({ review }) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
  
    const [description, setDescription] = useState('');
    const [eReview, setEReview] = useState(false)
    const { spotId } = useParams()
    const [errors, setErrors] = useState([]);

    const handleReviewEdit = (e) => {
        e.preventDefault();
        dispatch(editReview(review.id, sessionUser.id, spotId, description))
        setEReview(false)
        dispatch(loadReviews())
    }
    const handleReviewDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteReview(review?.id))
        await dispatch(loadReviews())
    }
    useEffect((errors = []) => {
        if (description.length < 1) errors.push("Description name is required");
        setErrors(errors);
    }, [description]);

    return (
        <div className='review-container'>
            <div className='review'>
                <div className='review-username'>Review from one of our Awesome Users</div>
                <div className='review-description'>Review: {review?.description}</div>
                {sessionUser?.id === review?.userId && <button onClick={handleReviewDelete}>Delete Review</button>}
                {sessionUser?.id === review?.userId && <button onClick={(e) => setEReview(!eReview)}>Edit Review</button>}
                {eReview === true &&
                    <form onSubmit={handleReviewEdit}>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <button disabled={!!errors.length}>Submit Edit</button>
                    </form>}
            </div>
        </div>
    )
}


