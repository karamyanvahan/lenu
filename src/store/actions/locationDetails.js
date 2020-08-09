import * as actionTypes from '../actionTypes';
import {getLocationDetails} from '../../axios/location'

const fetchDetailsSuccess = value => ({type: actionTypes.FETCH_DETAILS_SUCCESS, value: value})

export function fetchDetails(id) {
    return dispatch => {
        getLocationDetails(id).then(res => {
            dispatch(fetchDetailsSuccess(res.data))
        });
    }
}
