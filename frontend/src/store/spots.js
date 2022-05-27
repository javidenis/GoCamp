import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

export const getPokemon = () => async (dispatch) => {
    const response = await fetch(`/api/pokemon`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };
  

const initialState = { user: null };

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;