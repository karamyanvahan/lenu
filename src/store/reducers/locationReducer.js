import * as actionTypes from '../actionTypes';

const initialState = {
    data: [],
    loading: false,
    hasError: false,
    searchText: '',
    language: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.ERROR:
            return { 
                ...state,
                hasError: action.value
            }
        case actionTypes.LOADING:
            return { 
                ...state,
                loading: action.value
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return { 
                ...state,
                data: action.value,
                loading: false
            }
        case actionTypes.SET_SEARCH_TEXT:
            return { 
                ...state,
                searchText: action.value,
                isLoaded: true
            }
        case actionTypes.SET_LOCATION_LANGUAGE:
            return { 
                ...state,
                language: action.value
            }
    }
    return state;
}