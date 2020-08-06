import * as actionTypes from '../actionTypes';

const initialState = {
    data: [],
    isLoaded: false,
    hasError: false
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.ERROR:
            return { 
                ...state,
                hasError: action.value
            }
        case actionTypes.ERROR:
            return { 
                ...state,
                isLoaded: action.value
            }
        case actionTypes.SET_DATA:
            return { 
                ...state,
                data: action.value
            }
    }
    return state;
}