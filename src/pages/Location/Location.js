import React from 'react';

import './Location.sass'
import { connect } from 'react-redux';

import {Loader} from '../../components/utils'

import { fetchDetails } from '../../store/actions/locationDetails'

function Location(props) {
    let id = props.match.params.id,
    data = props.data[id]

    if(!data) {
        props.getData(id);
    }

    return (
        <div className="LocationPage">
            {data ? data.Name : <Loader />}
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.locationDetails
});

const mapDispatchToProps = dispatch => ({
    getData: id => dispatch(fetchDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);