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
        spot,
    };
};

const edit = (spot) => ({
    type: EDIT_SPOT,
    spot
});

export const editSpot = (data, id) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const info = await response.json();
        dispatch(edit(info));
        dispatch(getSpots())
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
    dispatch(getSpots())
}

export const addSpots = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/new`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const data = await response.json()
    dispatch(addSpot(data))
    dispatch(getSpots())
    return data
};

const delSpot = (spot) => {
    return {
        type: REMOVE_SPOT,
        payload: spot
    };
};

const initialState = { };

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SPOTS:
            newState = { ...state };
            action.spots.forEach((spot) => {
                newState[spot.id] = spot;
            });
            return newState;
        case ADD_SPOT:
            if (!state[action.spot.id]) {
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot,
                };
                return newState;
            }
        case REMOVE_SPOT:
            newState = { ...state };
            delete newState[action.payload]
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