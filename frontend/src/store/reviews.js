export const LOAD_REVIEWS = 'reviews/loadReviews';
export const ADD_REVIEW = 'review/addReview';
export const EDIT_REVIEW = 'review/editReview';
export const DELETE_REVIEW = 'review/deleteReview';

const { csrfFetch } = require('../store/csrf')

const load = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})

const add = (review) => ({
    type: ADD_REVIEW,
    review
})

const edit = (review) => ({
    type: EDIT_REVIEW,
    review
})

const delReview = (review) => ({
    type: DELETE_REVIEW,
    review
})


export const loadReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/`)

    if (response.ok) {
        const reviews = await response.json();
        dispatch(load(reviews));
    }
}

export const addReview = (userId, spotId, description) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, spotId, description })
    })
    if (response.ok) {
        const review = await response.json();
        await dispatch(add(review))
        await dispatch(loadReviews)
        return review
    }
}

export const editReview = (reviewId, userId, spotId, description) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewId, userId, spotId, description)
    })

    if (response.ok) {
        const review = await response.json();
        dispatch(edit(review));
        return review;
    }

}

export const deleteReview = (reviewId) => async (dispatch) => {

    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(delReview(reviewId))
        return data;
    }
}

const initialState = {}

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            newState = {};
            action.reviews.forEach(review => {
                newState[review.id] = review
            })
            return newState
        case ADD_REVIEW:
            newState = Object.assign({}, state);
            newState.review = action.payload;
            return newState;
        case DELETE_REVIEW:
            newState = Object.assign({}, state);
            newState.review = null;
            return newState;
        case EDIT_REVIEW:
            newState = { ...state };
            newState[action.review.id] = action.review;
            return newState;
        default:
            return state
    }
}

export default reviewsReducer;