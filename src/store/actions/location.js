import axios from 'axios';

import * as actionTypes from '../actionTypes';
import {getLocations} from '../../axios/location'

export const hasError = error =>({ type: actionTypes.ERROR, value: error });
export const isLoaded = loaded => ({ type: actionTypes.IS_LOADED, value: loaded });
export const setData = data => ({ type: actionTypes.SET_DATA, value: data });
export const setSearchText = searchText => ({ type: actionTypes.SET_SEARCH_TEXT, value: searchText });

export function fetchListData(searchText) {
    return dispatch => {
        getLocations(searchText).then(res => {
            dispatch(setData(res))
        });
    }
}
