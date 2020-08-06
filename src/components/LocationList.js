import React from 'react';
import { connect } from 'react-redux';

function LocationList(props) {
    return (
        <div></div>
    )
}

const mapStateToProps = state => ({
    locations: state.locations.data,
    isLoaded: state.locations.isLoaded
});

export default connect(mapStateToProps)(LocationList);