import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/getSpots'
const ADD_SPOT = 'spots/addSpot';
const REMOVE_SPOT = 'spots/removeSpot';

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

const removeSpot = () => {
    return {
        type: REMOVE_SPOT,
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
        default:
            return state;
    }
};

export default spotsReducer;