import * as actionTypes from '../actionTypes';

const initialState = {
    data: [],
    isLoaded: false,
    hasError: false,
    searchText: ''
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.ERROR:
            return { 
                ...state,
                hasError: action.value
            }
        case actionTypes.IS_LOADED:
            return { 
                ...state,
                isLoaded: action.value
            }
        case actionTypes.SET_DATA:
            return { 
                ...state,
                data: action.value
            }
        case actionTypes.SET_SEARCH_TEXT:
            return { 
                ...state,
                searchText: action.value
            }
    }
    return state;
}