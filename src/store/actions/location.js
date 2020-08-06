import axios from 'axios';

import * as actionTypes from '../actionTypes';
import {getLocations} from '../../axios/location'

const hasError = error =>({ type: actionTypes.ERROR, value: error });
const isLoaded = loaded => ({ type: actionTypes.IS_LOADED, value: loaded });
const setData = data => ({ type: actionTypes.SET_DATA, value: data });

export function fetchListData(searchText) {
    return dispatch => {
            getLocations(searchText).then(res => {
                dispatch(setData(res))
            });
    }
}