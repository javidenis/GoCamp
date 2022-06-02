import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/getSpots'
const ADD_SPOT = 'spots/addSpot';
const REMOVE_SPOT = 'spots/removeSpot';
const EDIT_SPOT = 'spots/editSpot'

const load = (spots) => {
    return {
        type: GET_SPOTS,
        spots
    }
}

export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch(`/api/spots`);

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};


const addSpot = (spot) => {
    return {
        type: ADD_SPOT,
        payload: spot,
    };
};

const edit = (spot) => ({
    type: EDIT_SPOT,
    spot
});

export const editSpot = (name, city, state, image, price, description, userId, id) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, city, state, image, price, description, userId, id })
    });

    if (response.ok) {
        const info = await response.json();
        await dispatch(edit(info));
        await dispatch(getSpots())
        return info;
    }
};

export const removeSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE'
    }
    );
    const info = await response.json()
    dispatch(delSpot(info))
}

export const addSpots = (name, city, state, image, price, description, userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/new`, {
        method: 'POST',
        body: JSON.stringify({ name, city, state, image, price, description, userId })
    });
    const info = await response.json()
    await dispatch(addSpot(info))
    await dispatch(getSpots())
    return info
};

const delSpot = (spot) => {
    return {
        type: REMOVE_SPOT,
        payload: spot
    };
};

const initialState = { spot: null };

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SPOTS:
            newState = {};
            action.spots.forEach((spot) => {
                newState[spot.id] = spot;
            });
            return newState;
        case ADD_SPOT:
            newState = Object.assign({}, state);
            newState.spot = action.payload;
            return newState;
        case REMOVE_SPOT:
            newState = Object.assign({}, state);
            newState.spot = null;
            return newState;
        case EDIT_SPOT:
            newState = { ...state };
            newState[action.spot.id] = action.spot;
            return newState;
        default:
            return state;
    }
};

export default spotsReducer;