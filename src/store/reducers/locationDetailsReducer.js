import * as actionTypes from '../actionTypes';

const initialState = {};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_DETAILS_SUCCESS:
            return { 
                ...state,
                [action.value.ID]: action.value
            }
    }
    return state;
}