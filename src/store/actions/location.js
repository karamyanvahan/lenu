import * as actionTypes from '../actionTypes';
import {getLocations} from '../../axios/location'

export const hasError = error =>({ type: actionTypes.ERROR, value: error });
export const loading = value => ({ type: actionTypes.LOADING, value: value });
export const fetchDataSuccess = data => ({ type: actionTypes.FETCH_DATA_SUCCESS, value: data });
export const setSearchText = searchText => ({ type: actionTypes.SET_SEARCH_TEXT, value: searchText });

export function fetchListData(searchText) {
    return dispatch => {
        dispatch(loading(true))
        getLocations(searchText).then(res => {
            dispatch(fetchDataSuccess(res.data))
        });
    }
}
